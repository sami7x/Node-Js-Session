//importing modules
const asyncHandler = require("express-async-handler");
const Contact = require("../model/contactModel");
const user = require("../model/userModel");

//for adding contact
const createContact = asyncHandler(async(req,res)=>
{
    console.log("The request is:", req.body);
    const {name, email} = req.body;
    
    if(!name || !email)
    {
        res.status(400);
        throw new Error("All fields are mandatory");

    }
    //business logic
    try{
        //saving contact query in DB
        const contact = await Contact.create({
            name, 
            email,
            user_id : req.user.id,

        });
        res.status(201).json(contact);
    }
    catch(error)
        {
            console.log(error);
            res.status(500).json({error: "Could not create contact"});
        }

    
});

module.exports = {createContact};