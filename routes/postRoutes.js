//importing modules
const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/", async(req,res) => {
    try{
        const {task} = req.body;
        // console.log(req.body); //display in terminal


        //Data save from DB
        const newTask = new User({task});
        await newTask.save();

        //Data fetch from DB
        const tasks= await User.find();
        res.render("index", {todoList: tasks});

    
     

    }
    catch(error)
    {
        console.log(error);
        res.status(500).send("Server Error");
    }
    

});

module.exports = router;
