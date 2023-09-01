import express  from "express";
import connectDb from "./config/db.js";
import router from "./routes/route.js";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();

const app=express()
const PORT=process.env.PORT||3000
//Call Db
connectDb()
app.use(cors())
app.use(express.json())

//routes
app.use("/api",router)

//Connect to Db
app.listen(PORT,()=>{
    console.log("Running on "+PORT)
})