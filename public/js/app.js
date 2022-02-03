// import { initAdmin } from './admin'
// import moment from 'moment'
// import { initStripe } from './stripe'
// import intiadmin from "./admin"
// import { admin } from "./admin"
import {initAdmin}  from "./admin.js";


let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')

function updateCart(pizza) {
   axios.post('/update-cart', pizza).then(res => {
        console.log(res)
        const cartCounter = document.querySelector("#cartCounter")
        cartCounter.innerText = res.data.massage
        new Noty({
         type: 'success',
         timeout: 1000,
         text: 'Item added to cart',
         progressBar: false,
     }).show();
   }).catch(err => {
      new Noty({
         type: 'error',
         timeout: 1000,
         text: 'somethings went Wrong',
         progressBar: false,
     }).show();
   })
}

addToCart.forEach((btn) => {
   btn.addEventListener('click', (e) => {
       let pizza = JSON.parse(btn.dataset.pizza)
       updateCart(pizza)
       let noty = document.querySelector(".notification");
       noty.style.visibility="visible"
       setTimeout(() => {
          
          noty.style.visibility="hidden"
       }, 1000);
   })
})
initAdmin()

