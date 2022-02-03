const  Orders = require("../../../models/order")
const moment = require("moment")
function ordercontroller(){
return{
    orderplace(req,res){
          const {phone,address}=req.body
          if(!phone||!address){
              req.flash("error","All field required")
             return res.redirect("/cart") 
          }
          const order = new Orders({
              castomerId:req.user._id,
              items: req.session.cart.items,
              phone:phone,
              address:address
          })
          order.save().then(result=>{
                   if(result){
                       delete req.session.cart
                      req.flash("success","order placed successfully") 
                       return res.redirect("/customer/orders")
                   }
          }).catch(err=>{
              if(err){
                  req.flash('error',"somethings went wrong")
                  return res.redirect("/cart")
              }
              
          })
    },
    async index(req,res){
          const orders = await Orders.find({castomerId:req.user._id},
            null,{sort:{"createdAt":-1}}
            )
       return res.render("orders/order",{orders:orders,moment:moment})
    }
}


}
module.exports = ordercontroller