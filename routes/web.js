const homeconroller =require("../app/http/controller/Homecontroller")
const authconroller =require("../app/http/controller/Auth/authcontroller")
const castomerconroller =require("../app/http/controller/Customer/castomercontroller")
const guest = require('../app/http/middleware/authmiddleware')
function routes (app){
    app.get("/",homeconroller().index)
       
    
    app.get("/cart",castomerconroller().castomer)
    app.post("/update-cart",castomerconroller().update)
     
 
    app.get("/login",guest,authconroller().login)
       app.post("/login",authconroller().authlogin)
   
    app.get("/register",guest,authconroller().register)
   app.post("/register",authconroller().authregister)
   app.post("/logout",authconroller().logout)
}
module.exports = routes