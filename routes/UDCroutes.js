const express = require("express");
const UDC=require('../modals/UDC')
const multer = require("multer");
// const { addCatagory, getCatagories } = require('../controllers/catagory');
const router = express.Router();
const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

// router.get('/catagory/getcatagory',getCatagories);
const upload = multer({ storage });
router.post("/UDC", upload.single("file"), async (req, res) => {

  const { roll, name } = req.body;
  let user = await UDC.findOne({roll:roll});
  if (user) {
    user.file.push(req.file.filename);
  } else {
    user = new UDC({
      name: name,
      roll: roll,
      file: [req.file.filename],
    });
  }

  user.save((error, product) => {
    if (error) return res.status(400).json({ error });

    if (product) {
      res.status(201).json({ product });
    }
  });
});

module.exports = router;
