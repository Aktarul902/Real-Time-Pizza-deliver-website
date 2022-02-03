const order = require("../../../models/order")
function orderController() {
    return {
        admin(req, res) {
           order.find({ status: { $ne: 'completed' } }, null, { sort: { 'createdAt': -1 }}).populate('castomerId', '-password').exec((err, orders) => {
             
               if(req.xhr) {
                   return res.json(orders)
                } else {
                    return res.render('admin/admin')
               }
           })
        }
    }
}

module.exports = orderController