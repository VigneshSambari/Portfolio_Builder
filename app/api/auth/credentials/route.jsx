import { connectToDB } from "@utils/database";
import User from "@models/user";
import { statusEnum }  from "../utils/status_codes";
import { respondToError, responseHandler } from "../utils/response_handler";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


//Generate encryped password
const generateEncryptedPassword = async (password) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return hashedPassword;
}

export const POST = async (request, { params }) => {
    const {type} = Object.fromEntries(request.nextUrl.searchParams);

    if(type === "SIGNUP"){
        const {email, password, firstName, lastName} = await request.json();
        try{
            await connectToDB();
            if(!email || !password){
                return NextResponse.json(
                    respondToError({message: "Email and password should not be empty!"}),
                    {status: statusEnum.BAD_REQUEST}
                )
            }
        
            const existingUser = await User.findOne({email})
        
            if (existingUser){
                return NextResponse.json(
                    responseHandler.USER_EXISTS,
                    {status: statusEnum.BAD_REQUEST}
                )
            } 
                
            const hashedPassword = await generateEncryptedPassword(password);
            
            const name = firstName + " " + lastName;

            const result = await User.create({name:name, email, password: hashedPassword });

            return NextResponse.json(
                result,
                {status: statusEnum.CREATED}
            )
        }
        catch(err){

            return NextResponse.json(
                respondToError({
                    message: "Error creating user!",
                    error: err.message,
                }),
                {status: statusEnum.BAD_REQUEST}
            )
        }

     }
     else if(type==="SIGNIN"){

        const {email, password} = request.body;

        if (!email || !password ){
            return new Response(JSON.stringify(respondToError("Email and Password should not be empty")), 
                {status: statusEnum.BAD_REQUEST}); 
        } 
        
        try {
            await connectToDB();
            const existingUser = await User.findOne({email})

            if (!existingUser){
                return new Response(JSON.stringify(responseHandler.USER_NOT_EXISTS), 
                {status: statusEnum.NOT_FOUND}); 
            } 
                
            const isPasswordOk = await bcrypt.compare(password, existingUser.password);

            if (!isPasswordOk){
                return new Response(JSON.stringify(respondToError("Invalid Password!")), 
                {status: statusEnum.NOT_FOUND}); 
            } 
                

            const token = generateToken({_id: existingUser._id, email: email})
            
            const result = {...existingUser.toObject(),token};
            return new Response(JSON.stringify(result), 
                {status: statusEnum.OK}); 

        } catch (err) {

            return new Response(JSON.stringify(respondToError(err.message)), 
                {status: statusEnum.BAD_REQUEST}); 
        }    

     }
     else if(type === "CHANGE_PASSWORD"){
        const {email, newPassword, oldPassword} = req.body;

        try {
            await connectToDB();

            if (email === ""){ 
                return new Response(JSON.stringify(respondToError("Email fiels is empty")), 
                {status: statusEnum.NOT_ALLOWED}); 
            }

            const existingUser = await User.findOne({email});
    
            if (!existingUser){
                return new Response(JSON.stringify(responseHandler.USER_NOT_EXISTS), 
                {status: statusEnum.NOT_FOUND}); 
            } 
                
    
            const isPasswordOk = await bcrypt.compare(oldPassword, existingUser.password);
            
             if (!isPasswordOk){
                return new Response(JSON.stringify(respondToError("Invalid credentials!")), 
                {status: statusEnum.NOT_ALLOWED}); 
             } 
                 
            const hashedPassword = await generateEncryptedPassword(newPassword);
            
            existingUser.password=hashedPassword

            existingUser.save()
            
            return new Response(JSON.stringify(existingUser), 
                {status: statusEnum.OK}); 
        } catch (err) {

            return new Response(JSON.stringify(respondToError(err.message)), 
                {status: statusEnum.BAD_REQUEST}); 
        }

     }
 }
