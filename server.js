//importing module
const express = require ("express");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");


//importing routes 
const getRoutes = require("./routes/getRoutes");
const postRoutes = require("./routes/postRoutes");

const dotenv = require("dotenv").config();

//init
connectDB();
const app = express();



//for middleware
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded ({extended:true}));



//making routes
app.use("/", getRoutes);
app.use("/",postRoutes);


const PORT = process.env.PORT || 5000;



const startServer= async()=>{
    try{

        app.listen(PORT, () => {
            console.log (`Server is running in port no ${PORT}`);
        });

    }
    catch(error)
    {
        console.log(error);
    }
}

startServer();
