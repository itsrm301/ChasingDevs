require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("../routes/userroutes");
const brpRoutes=require("../routes/brproutes");
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


app.use("/api/user", userRoutes);
app.use("/api/brp",brpRoutes);


const port = process.env.PORT || 3001;
app.listen(port, () => { console.log(`listenning on port ${port}`) });