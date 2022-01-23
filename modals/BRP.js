const mongoose = require("mongoose");

const BRPSchema = new mongoose.Schema({
    lastUpdaterollno: {
        type: String,
        required: true
    },
    rollType: {
        type: String,
        required: true
    },
    organisationName:{
        type:String,
        required:true
    },
    status: {
        type: String,
        enum: ['pending', 'process', 'resolved', 'rejected'],
        required: true
    },
    remark: {
        type: String,

    }


});

const BRP = mongoose.model("BRP", BRPSchema);
module.exports = BRP;