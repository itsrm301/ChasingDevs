require("dotenv").config();
const express =require("express");
const mongoose= require("mongoose");
const userRoutes =require("../routes/userroutes");
const app= express();

const conndb=async()=>{ return await mongoose.connect(process.env.URI);}
conndb().then(()=>{console.log("mongDb connected");}).catch(err=>console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/user",userRoutes);


const port=process.env.PORT||8000;
app.listen(port,()=>{console.log(`listenning on port ${port}`)});