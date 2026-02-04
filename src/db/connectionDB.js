// Import mongoose and name of database
import mongoose from "mongoose"
import { DB_NAME } from "../constant.js"

// connection function
const connectionDB = async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`);
        console.log("Successfully connected to MongoDb");
    } catch (error) {
        console.log("MongoDb connection error:", error.message);
        process.exit(1)
    }
}
export default connectionDB;