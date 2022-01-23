require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("../routes/userroutes");
const brpRoutes=require("../routes/brproutes");
const sgfRoutes=require("../routes/sgfRoutes");
const udcRoutes=require("../routes/UDCroutes");
const app = express();
const cors=require('cors');


const conndb = async () => { return await mongoose.connect(process.env.URI); }
conndb().then(() => { console.log("mongDb connected"); }).catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin:'*',
    methods:['GET','POST'],
    allowedHeaders:['Content-Type', 'Authorization'],
    credentials:true
}))
// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3001', 'http://localhost:8080', 'https://gymkhana-hackathon-2k22.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

app.use("/api/user", userRoutes);
app.use("/api/brp",brpRoutes);
app.use("/api/sgf",sgfRoutes);
app.use("/api/UDC",udcRoutes);

const path = require('path');
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'frontend/public')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'frontend/public', 'index.html'));
  });
}

const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`listenning on port ${port}`) });
