//importing modules
const express= require("express");
const connectDb = require("./config/db");
const dotenv = require("dotenv").config();


connectDb();
const app = express();

const PORT = process.env.PORT || 5000;

//server start
const start= async()=>{
    try{
        app.listen(PORT, () =>{
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch(error)
    {
        console.log(error);
    }

}
start();

