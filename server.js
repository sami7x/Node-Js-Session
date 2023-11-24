//require
const express = require ("express");
//importing modules

//server initilaize
const app = express();

const PORT = process.env.PORT || 5000;

//middlewares
app.get("/",(req, res)=> {
    res. send("Hello Dev");
})

// //server activation
// app.listen(4000, () => {
//     console.log("Server running on port 4000");

// });


//server activation
const start = async()=>{
    try{
        app.listen(PORT,() =>{
            console.log(`Server running on port ${PORT}`); //backtics/template literals
        });
    }
    catch(error)
    {
        console.log(error);
    }
};

start();
