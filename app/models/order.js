const mongoose = require("mongoose");
const orderSchema= new mongoose.Schema({
    castomerId:{
        required:true,
        type:mongoose.Schema.Types.ObjectId,
        ref:"Userdata",
        
    },
    items:{
        required:true,
        type:Object
        
    },
    phone:{
        required:true,
        type:Number
        
    },
   address:{
       type:String,
       required:true
   },
   paymenttype:{
     type:String,
     default:"COD"

   },
   status:{
       type:String,
       default:"order placed successfully"
   }
},{timestamps:true})
const Orders = new mongoose.model("Order",orderSchema)
module.exports=Orders