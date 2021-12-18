const express=require("express");
const router=express.Router();
const getrow = require("../src/fetchcredentials");


router.get("/",(req,res)=>{
    res.send("hello just for testing whether working or not");
});

router.post("/login",(req,res)=>{
    const user=getrow(req.body.email);
    console.log(user);
    if(user!==null){
        console.log(user);
        res.send(user);
    }
})

module.exports =router;