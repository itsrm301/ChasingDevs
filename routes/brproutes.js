const express=require("express");
const { stat } = require("fs");
const router=express.Router();
const BRP=require('../modals/BRP');

router.get('/getBrp/:organisation',async (req,res)=>{
    if(req.params.organisation){
        const brp=await BRP.find({organisationName:organisation});
        console.log(brp);
        if(brp){res.status(200).send({brp});}
    }
})
router.post('/addBrp',async (req,res)=>{
    try{
        const {lastUpdaterollno,rollType,organisationName,status,remark}=req.body;
        console.log(lastUpdaterollno);
        if(lastUpdaterollno){
            const noOfbrp=await BRP.find({organisationName:organisationName});
            console.log(noOfbrp,typeof(noOfbrp));
            if(noOfbrp.length==0){
                const newBrp=new BRP({
                    lastUpdaterollno,rollType,organisationName,status,remark
                });
        
                await newBrp.save();
                return res.status(200).send({newBrp});
            }else{
                res.status(405).send({error:"Wrong route Chosen , use Update to update the BRP form"})
            }
           
    
        }else{
            res.status(401).send({error:"User lastUpdaterollno not specified"})
        }
    }catch(e){console.log(e)}
    
});

router.post('/updateBrp',async (req,res)=>{
    const {lastUpdaterollno,rollType,organisationName,status,remark}=req.body;
    if(lastUpdaterollno){
        const noOfbrp=await BRP.find({organisationName:organisationName});
        console.log(noOfbrp,typeof(noOfbrp));
        if(noOfbrp.length==1){
           const updatedBrp= await BRP.findOneAndUpdate({organisationName:organisationName},{$set:{lastUpdaterollno:lastUpdaterollno,rollType:rollType,organisationName:organisationName,status:status,remark:remark}})
            return res.status(200).send({updatedBrp});
        }else{
            res.status(405).send({error:"No such Organisation saved"})
        }
       

    }else{
        res.status(401).send({error:"User lastUpdaterollno not specified"})
    }
});


module.exports=router;