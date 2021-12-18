const mongoose= require("mongoose");

const SFGSchema=new mongoose.Schema({

    roll:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    queryRaised:{
        type:String,
        required:true

    },
    status:{
        type:String,
        enum:['pending','process','resolved','rejected'],
        required:true
    },
    response:{
        type:String
    }
});


const SFG=mongoose.model("SFG",SFGSchema);
module.exports=SFG;