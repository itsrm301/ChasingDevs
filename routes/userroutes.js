const express=require("express");
const router=express.Router();
const getrow = require("../src/fetchcredentials");


router.get("/",(req,res)=>{
    res.send("hello just for testing whether working or not");
});

router.post("/login",(req,res)=>{
<<<<<<< HEAD
getrow(req.body.email).then((user)=>{
if(user!==null)
{
    res.send({name:user.name,roll:user.Roll})
    }else{
        res.send("User not exist");
    }
}).catch(e=>console.log(e));

 console.log(!null);
    
=======
   getrow(req.body.email).then((user)=>
                    {
                        if(user!=null)res.send({name:user.name,roll:user.Roll,email:user.email});
                        else res.send({error:"user doesmt exist"});
                    }
                    ).catch(e=>console.log(e));


>>>>>>> 3e70922d61b1e1423b60a798fe137135c3887960
})

module.exports =router;