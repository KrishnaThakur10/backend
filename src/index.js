// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
// import express from 'express'

// require statement for env
// require('dotenv').config({path: './env'})


import connectDB from "./db/index.js";
import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("error", error);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on this port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Connection Failed : `, err);
  });

// const app = express()

// (async() =>
//     {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("ERROR",(error)=>{
//                 console.log("Express is not getting connect: ", error);
//                 throw error
//             })
//             app.listen(process.env.PORT, ()=>{
//                 console.log(`App is listening on this port:${process.env.PORT}`);

//             } )
//         } catch (error) {
//             console.error("Error is: ",error);
//             throw error

//         }
//     })()
