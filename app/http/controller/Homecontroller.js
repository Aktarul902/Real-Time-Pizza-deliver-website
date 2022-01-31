const Pizza = require("../../models/schema")
function homecontroller (){

    return {
        async index(req,res){
               const pizzas = await Pizza.find()
            //   const pizza = await pizzas.tostring()
            //   console.log(pizza)
         
            return  res.render("index", {pizzas:pizzas});
        
        }
    }
}
module.exports=homecontroller