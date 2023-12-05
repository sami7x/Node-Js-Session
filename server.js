//importing modules

const express = require ("express");
const jwt = require ("jsonwebtoken");
const dotenv = require("dotenv").config();

//init
const app = express();
const secretKey = "secretKey";

//middleware
// app.get("/", (req,res)=>
// {
//     res.json("Hello world");

// });

//port define
const PORT = process.env.PORT || 5000;

//routes with controller
app.post("/login", (req,res) =>
{
    //controller
    const user =  {
        id: 1,
        username: "anuppi",
        email: "anupama@gmail.com"
    };

    //for jwt authentication
    jwt.sign({user}, secretKey, {expiresIn: "20s"}, (err,token)=>
    {
        res.json({
            token,
        });
    });
});

app.post("/profile", verifyToken, (req,res) => {
  jwt.verify(req.token, secretKey, (err, authData)=>{
    if(err)
    {
      res.send({ results: "Invalid token"});
    }
    else{
      res.json({
        message: "Profile accessed",
        authData,
      });
    }
  });
});

function verifyToken(req,res,next)
{
    const bearerHeader = req.headers["authorization"];
     
    if(typeof bearerHeader !== "undefined")
    {
      //generating new token 
      const bearer = bearerHeader.split(" ");
      const token = bearer[1];

      req.token = token;
      next();
    }

    else{
        res.send({
            result: "Token is not valid",
        });
    }
}

//server activation 
const startServer = async()=>
{
    //synchronous code
    try{
        app.listen(PORT, ()=>{
            console.log( `Server is running on Port ${PORT}`);
        })
    }
    catch(error)
    {
        console.log(error);
    }
};
startServer();