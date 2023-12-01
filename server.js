//importing module
const express = require ("express");
const dotenv = require ("dotenv").config();
const connectDB = require('./config/db');
//for api testing instead of body-parser
const cors = require("cors");


//importing routes
const productRoutes = require("./routes/product");


//init
connectDB();
const app = express();

//middleware 
app.use(express.json());
app.use(cors());
//routing
app.use("/api/products", productRoutes);


//port
const PORT = process.env.PORT || 5001;

//start server

const startServer = async()=>
{
    try{

        app.listen(PORT,() =>
        {
            console.log(`Server running on port no ${PORT}`);
        });

    }
    catch(error)
    {
        console.log(error);

    }
}

startServer();