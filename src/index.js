import app from "./app.js";
import dotenv from "dotenv";
import connectionDB from "./db/connectionDB.js";

dotenv.config();

// Connect to Port if connection is successfull
connectionDB()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("Server is Running");
    })
})