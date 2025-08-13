import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from 'express'

const app = express()

(async() => 
    {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("ERROR",(error)=>{
                console.log("Express is not getting connect: ", error);
                throw error
            })
            app.listen()
        } catch (error) {
            console.error("Error is: ",error);
            throw error
            
        }
    })()