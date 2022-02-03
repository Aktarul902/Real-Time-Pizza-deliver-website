const homeconroller =require("../app/http/controller/Homecontroller")
const authconroller =require("../app/http/controller/Auth/authcontroller")
const castomerconroller =require("../app/http/controller/Customer/castomercontroller")
const guest = require('../app/http/middleware/authmiddleware')
const orders = require("../app/http/controller/orders/orders")
const auth = require("../app/http/middleware/ordermiddleware")
const adminController = require("../app/http/controller/Admin/adminController")
const adminmiddleware = require("../app/http/middleware/adminmiddleware")
function routes (app){
    app.get("/",homeconroller().index)
       
    
    app.get("/cart",castomerconroller().castomer)
    app.post("/update-cart",castomerconroller().update)
    app.post("/orders",auth,orders().orderplace)
    app.get("/customer/orders",auth,orders().index)
    app.get("/admin/orders",adminmiddleware,adminController().admin)
     
 
    app.get("/login",guest,authconroller().login)
       app.post("/login",authconroller().authlogin)
   
    app.get("/register",guest,authconroller().register)
   app.post("/register",authconroller().authregister)
   app.post("/logout",authconroller().logout)
}
module.exports = routes