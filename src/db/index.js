import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"


const connectDB = async () =>{
    try {
        console.log(process.env.MONGODB_URI);
        
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Database connected || Host name :${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MongoDB Connection failed: `, error);
        process.exit(1)
        
    }
}

export default connectDB;