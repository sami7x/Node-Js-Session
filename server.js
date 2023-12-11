//importing module
const express = require ("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");


//init
connectDB();
const app = express();

//port define
const PORT = process.env.PORT || 5000;

//middleware for importing routes
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));



const startServer = async()=>
{
    try{
        app.listen(PORT,()=>
        {
            console.log(`Server is running on ${PORT}`);
        })
    }
    catch(error)
    {
        console.error(error);
    }
}
startServer();