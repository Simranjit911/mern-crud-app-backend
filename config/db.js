import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
let BASEURI = process.env.MONGO_URI
async function connectDb() {
    try {
        let res = await mongoose.connect(BASEURI)
        if (res) {
            console.log("Connected with Db")
        }
    } catch (error) {
        console.log(error)
    }
}
export default connectDb