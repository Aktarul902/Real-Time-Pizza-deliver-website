function castomarcontroller(){
    return{
        castomer(req,res){
            res.render("castomer/cart")
        },
        update(req,res){
            if (!req.session.cart) {
                req.session.cart = {
                    items: {},
                    totalQty: 0,
                    totalPrice: 0
                }
            }
            let cart = req.session.cart

            // Check if item does not exist in cart 
            const _id = req.body._id
            if(!cart.items[_id]) {
                cart.items[_id] = {
                    item: req.body,
                    qty: 1
                }
                cart.totalQty = cart.totalQty + 1
                cart.totalPrice = cart.totalPrice + req.body.price
            } else {
                cart.items[_id].qty = cart.items[_id].qty + 1
                cart.totalQty = cart.totalQty + 1
                cart.totalPrice =  cart.totalPrice + req.body.price
            }
            // console.log(req.body._id)
            // console.log(req.session)
            return res.json({massage : req.session.cart.totalQty})
        }
    }
}
module.exports = castomarcontroller