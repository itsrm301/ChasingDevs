const express=require("express");
const router=express.Router();
const getrow = require("../src/fetchcredentials");


router.get("/",(req,res)=>{
    res.send("hello just for testing whether working or not");
});

router.post("/login",(req,res)=>{
   getrow(req.body.email).then((user)=>
                    {
                        if(user!=null)res.send({name:user.name,roll:user.Roll,email:user.email});
                        else res.send({error:"user doesmt exist"});
                    }
                    ).catch(e=>console.log(e));


})

module.exports =router;