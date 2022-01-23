const mongoose=require("mongoose");

const UDCSchema=new mongoose.Schema({
    roll:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    file:[{
        type:String
    }]
});
const UDC=mongoose.model("UDC",UDCSchema);
module.exports=UDC;