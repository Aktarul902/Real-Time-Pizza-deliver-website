const mongoose = require("mongoose");
const userSchema= new mongoose.Schema({
    name:{
        required:true,
        type:String
        
    },
    email:{
        required:true,
        type:String
        
    },
    password:{
        required:true,
        type:String
        
    },
    role: { type: String, default: 'customer' }
},{timestamps:true})
const Userdata = new mongoose.model("Userdata",userSchema)
module.exports=Userdata