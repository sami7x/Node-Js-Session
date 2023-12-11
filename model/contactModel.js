//importing module
const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
    {
    user_id:{
        type: mongoose.Schema.Types.ObjectId, //for auto increment
        required:true,
        ref: "User", //foreign key
    },
    name: {
        type: String,
        required: [ true, "Please add the contact name."],
    },
    email: {
        type: String,
        required: [ true, "Please add the email adrees."],
    },
    },
    {
        timpestamps:true,
    }

);

module.exports = mongoose.model("contact", contactSchema);