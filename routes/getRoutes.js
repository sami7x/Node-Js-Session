//importing modules

const express = require("express");
const router = express.Router();

const User = require("../models/user");

router.get("/", async(req,res) => {
    try{
        //node js query
        const tasks = await User.find();
        console.log(tasks);
        res.render("index", {todoList: tasks});
    }
    catch(error)
    {
        res.status(500).send("Server error");
    }
});

module.exports = router;