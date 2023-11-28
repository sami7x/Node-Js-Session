//imprt module
const express = require("express");
const dotenv = require ("dotenv").config();
const connectDB = require("./config/db");
const app = express();
const PORT = process.env.PORT || 5000;
const User = require("./models/user");


//middleware (documentation code)
app.use(express.urlencoded({ extended: true})); //euta form bata body/post request pathako xa
app.set("view engine", "ejs"); //browser ma run gardaidinxa
app.get("/", (req,res) => { //location kata chai display garaunay
    res.render("index"); //render garaunay thau 
 }); 



//sending data into the database
app.post("/", async (req,res)=>{
    try{
        //syncronous code here
        //  const user = req.body;
        //  console.log(req.body);     
        
        //variable
        const { fname , lname, age, email} = req.body;
        //query for saving user
        const newUser = new User({
            fname:fname,
            lname:lname,
            age,
            email,
        });

        await newUser.save();
        res.send("Data saved successfully");
    }
    catch(error){
        console.error(error);
        res.status(500).send("Server error");
    }
});


connectDB();

const startServer = async() =>
{
    try{
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`)
        });
    }

    catch(error)
    {
        console.log(error);
    }
}

startServer();