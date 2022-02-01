const session = require("express-session");
const User = require("../../../models/userschema")
const bcrypt = require("bcrypt");
const passport = require("passport");
function authcontroller (){
    return {
        login(req,res){
            res.render("auth/login");
        },
        authlogin(req,res,next){
            const { email, password }   = req.body
            // Validate request 
             if(!email || !password) {
                 req.flash('error', 'All fields are required')
                 return res.redirect('/login')
             }
             passport.authenticate('local', (err, user, info) => {
                 if(err) {
                     req.flash('error', "username and password is invalid " )
                     return next(err)
                 }
                 if(!user) {
                     req.flash('error', "username and password is invalid " )
                     return res.redirect('/login')
                 }
                 req.logIn(user, (err) => {
                     if(err) {
                         req.flash('error',"username and password is invalid" ) 
                         return next(err)
                     }
 
                     return res.redirect("/")
                 })
             })(req, res, next)
        },
        register(req,res){
            res.render("auth/register");
        },
       async authregister(req,res){
           try {
               
               const {name,email,password} = req.body;
               if(!name||!email ||!password){
                   req.flash('error', 'All fields are required')
                   req.flash('name', name)
                   req.flash('email', email)
                   return res.redirect('/register')
            }
            User.exists({email:email},(err,result)=>{
                if(result){
                    req.flash('error','email is already taken')
                    req.flash('name', name)
                    req.flash('email', email)
                    return res.redirect('/register')
                }
            })
            const hashpassword = await  bcrypt.hash(password,10)
            const saveuser = new User({
                name:name,
                email:email,
                password:hashpassword
            });
            saveuser.save().then(user=>{
                console.log(user)
          return res.redirect("/")
            }).catch(err=>{
                req.flash("error","something went wrong ")
               return res.redirect("/register")
            })
            console.log(data)
          
        } catch (error) {
            
        }
            
        } ,
        logout(req,res){
            req.logout()
            return res.redirect("/")
        }
    }
}
module.exports=authcontroller