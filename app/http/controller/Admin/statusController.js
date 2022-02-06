const Orders = require("../../../models/order")
function statusController(){
return {
    status(req,res){
        const {orderId , status} = req.body
        Orders.updateOne({_id:orderId},{status:status},(err,data)=>{
            if(err){
                return res.redirect("/admin/orders")
            }else {
                res.redirect("/admin/orders")
                let eventemitter = req.app.get("eventEmitter")
                eventemitter.emit('updateOrder',{orderId:orderId,status:status})
            }

        })
    }
}
}
module.exports = statusController