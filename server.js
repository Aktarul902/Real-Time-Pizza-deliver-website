const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path");
const expresslayout = require('express-ejs-layouts');
const port = process.env.port||3000;

app.use(express.static(path.join(__dirname,"/public")))
app.use(expresslayout)
app.set("views",path.join(__dirname,"./resources/views"))
app.set("view engine", "ejs");
app.get("/",(req,res)=>{
    res.render("index");
})
app.get("/cart",(req,res)=>{
    res.render("castomer/cart")
})
app.get("/login",(req,res)=>{
    res.render("auth/login")
})
app.get("/register",(req,res)=>{
    res.render("auth/register")
})
app.listen(port,()=>{
    console.log(`listen from server no ${port}`);

})

