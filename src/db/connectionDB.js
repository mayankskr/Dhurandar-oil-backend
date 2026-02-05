import mongoose from "mongoose";
import { db_name } from "../constant.js";

const connectiondb = async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_URI}${db_name}`)
        console.log("Successfully connected to MongoDB");
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
    }
}
export default connectiondb;