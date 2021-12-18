const mongoose= require("mongoose");

const SFGSchema=new mongoose.Schema({

    roll:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
});


const SFG=mongoose.model("SFG",SFGSchema);
module.exports=SFG;