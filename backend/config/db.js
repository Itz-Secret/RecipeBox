import mongoose from "mongoose";

export default async function DBconnect(){
    try {
        await mongoose.connect(process.env.Mongo_DB_URL)
    } catch (error) {
        console.log(error.message);
    }
}