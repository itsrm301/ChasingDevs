const mongoose = require("mongoose");

const SGFSchema = new mongoose.Schema({
  roll: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  queryRaised: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "process", "resolved", "rejected"],
    required: true,
  },
  response: {
    type: String,
  },
});

const SGF = mongoose.model("SGF", SGFSchema);
module.exports = SGF;
