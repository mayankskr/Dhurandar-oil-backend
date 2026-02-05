import express from "express";
import cors from "cors";
import dotenv from "dotenv"
const app = express();
dotenv.config();
app.use(cors())

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({limit:"16kb"}));

export default app;