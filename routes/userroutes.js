const express=require("express");
const router=express.Router();
const getrow = require("../src/fetchcredentials");


router.get("/",(req,res)=>{
    res.send("hello just for testing whether working or not");
});

router.post("/login",(req,res)=>{
getrow(req.body.email).then((user)=>{
if(user!==null)
{
    res.send({name:user.name,roll:user.Roll})
    }else{
        res.send("User not exist");
    }
}).catch(e=>console.log(e));

 console.log(!null);
    
})

module.exports =router;