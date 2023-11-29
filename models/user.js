//import module
const mongoose = require ("mongoose");

const userSchema = new mongoose.Schema({
 task:
 {
    type:String,

 },
});

const User = mongoose.model("User", userSchema);
module.exports = User;