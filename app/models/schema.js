const mongoose = require("mongoose");
const modelSchema= new mongoose.Schema({
    name:{
        required:true,
        type:String
        
    },
    image:{
        required:true,
        type:String
        
    },
    price:{
        required:true,
        type:Number
        
    },
    size:{
        required:true,
        type:String
        
    },
})
const Pizza = new mongoose.model("pizzadelivary",modelSchema)
module.exports=Pizza