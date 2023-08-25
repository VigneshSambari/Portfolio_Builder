import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },


    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            
            async authorize(credentials){
                const {email, password} = credentials;

                try{
                    await connectToDB();

                    const user = await User.findOne({email: email});

                    if(!user){
                        return {
                            message: "User doesn't exist",
                        }
                    }

                    const passMatch = await bcrypt.compare(password, user.password);

                    if(!passMatch){
                        return {
                            message: "Invalid email or password!",
                        }
                    }

                    return user;
                }
                catch(err){
                    return {
                        message: err.message,
                    }
                }
            }
        }),

        GoogleProvider({    
            name: "google",
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],

    callbacks:{
        async session({session}){
   
            const sessionUser = await User.findOne({
                email: session.user.email,
            })
    
            session.user.id = sessionUser._id.toString();
            session.user.name = sessionUser.name;
    
            return session; 
        },
        async signIn({profile,user}){
            try{
                // console.log(user);
                // await connectToDB();
                
                // const userExists = await User.findOne({
                //     email: profile.email,
                // });

                // if(!userExists){
                //     await User.create({
                //         email: profile.email,
                //         image: profile.picture,
                //     })
                // }
                return true;
            }
            catch(err){
                return false;
            }
        }
    }
})

export { handler as GET, handler as POST};