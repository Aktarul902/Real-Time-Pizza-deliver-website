const Userdata = require("../../models/userschema")

function authentic(req,res,next){
     if(req.isAuthenticated()){
         return next()
     }else{
         return res.redirect("/login")
     }
}
module.exports = authentic