// import { initAdmin } from './admin'
// import moment from 'moment'
// import { initStripe } from './stripe'


let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')

function updateCart(pizza) {
   axios.post('/update-cart', pizza).then(res => {
        console.log(res)
        const cartCounter = document.querySelector("#cartCounter")
        cartCounter.innerText = res.data.massage
   }).catch(err => {
    
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