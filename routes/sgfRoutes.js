const express = require("express");
const router = express.Router();
const SGF = require("../modals/SGF");
router.post("/sgf", (req, res) => {
  const Grievance = new SGF({
    roll: req.body.roll,
    name: req.body.name,
    queryRaised: req.body.queryRaised,
    status: "pending",
  });
  Grievance.save((err, data) => {
    if (err) {
      return res.status(400).json({
        message: err,
      });
    }
    if (data) {
      return res.status(201).json({
        message: "Grievance added successfully",
        data: data,
      });
    }
  });
});

module.exports = router;
