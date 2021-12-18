const express=require("express");
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("hello just for testing whether working or not");
});

module.exports =router;