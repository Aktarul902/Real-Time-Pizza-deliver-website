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
let changestatus = document.querySelectorAll(".status_line")
let status = document.querySelector("#hiddenInput") 
let order = status ? status.value:null
order = JSON.parse(order);
let time = document.createElement('small')

function updatestatus(order){
   changestatus.forEach((status) => {
      status.classList.remove('step-completed')
      status.classList.remove('current')
  })
let stepcomplete = true;
changestatus.forEach((status)=>{
   
       const propvalue = status.dataset.status
      //  console.log(order)
       if(stepcomplete){
          status.classList.add("step-completed")
       }
      if(order.status === propvalue){
         stepcomplete = false
         if(status.nextElementSibling){
            time.innerText = moment(order.updatedAt).format('hh:mm A')
            status.appendChild(time)
            status.nextElementSibling.classList.add("current")
            
         }
      } 
})

}
updatestatus(order)
// socket 
let  socket = io();
if(order){
   socket.emit("join",`order_${order._id}`)
   
}
socket.on('orderUpdated', (data) => {
   const updatedOrder = { ...order }
   updatedOrder.updatedAt = moment().format()
   updatedOrder.status = data.status
   // console.log(data)
   updatestatus(updatedOrder)
   new Noty({
       type: 'success',
       timeout: 1000,
       text: `Your order has been ${data.status}`,
       progressBar: false,
   }).show();
})
let adminArea = window.location.pathname;
if(adminArea.includes("admin")){
   initAdmin(socket)
  socket.emit("join","admin")
}


