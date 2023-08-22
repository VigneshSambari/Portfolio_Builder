import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI,{
            dbName: "portfolio_builder",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected=true;
    }
    catch(err){
        console.log(err);
    }
}