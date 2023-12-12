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

//for updating contact
const contact_update = asyncHandler(async(req,res) =>
{
    try{
        //params fetch unique Id
        const contactId = req.params.contactId;
        const updateContact = await Contact.findByIdAndUpdate(
            contactId,
            req.body,
            { new:true}
        );

        if(!updateContact)
        {
            return res.status(404).json({message: "Contact not found"});
        }
        res.json({ message: "Contact updated successfully"});
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});

//for deleting
const contact_delete = asyncHandler(async(req,res)=>
{
    try{
        const contactId = req.params.contactId;
        const deleteContact = await Contact.findByIdAndDelete(
            contactId,
            req.body,
        );
        if(!deleteContact)
        {
            return res.status(404).json({message:"Contact not found"});
        }
        res.json({message: "Contact deleted successfully"});
    }
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});

//fetch data
const contact_all = asyncHandler(async(req,res )=>
{
    try{
        const contacts = await Contact.find ();
        if(contacts.length == 0)
        {
            return res.json({message: "There are no contact left"})
        }
        res.json(contacts);

    }   
    catch(error)
    {
        res.status(500).json({message: error.message});
    }
});

//fetch single data
const contact_single = asyncHandler(async(req,res )=>
{
    try{
        const contactId = req. params.contactId;
        const singleContact = await Contact.findById (
            contactId,
            req.body,
        );
        if(!singleContact)
        {
            return res.status(404).json({message: "Contact not found"});
        }
        res.json(singleContact);
    }
    catch(error)
    {
        res.status(500).json({mesage: error.message});

    }
});

module.exports = {createContact, contact_delete, contact_update, contact_all, contact_single};