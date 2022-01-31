const homeconroller =require("../app/http/controller/Homecontroller")
const authconroller =require("../app/http/controller/authcontroller")
const castomerconroller =require("../app/http/controller/castomercontroller")
function routes (app){
    app.get("/",homeconroller().index)
       
    
    app.get("/cart",castomerconroller().castomer)
    app.post("/update-cart",castomerconroller().update)
     
 
    app.get("/login",authconroller().login)
       
   
    app.get("/register",authconroller().register)
   
}
module.exports = routes