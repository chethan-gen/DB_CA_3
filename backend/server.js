const express = require('express');
const mongoose = require("mongoose");
const app = express();
app.use(express.json())
const dotenv = require("dotenv");
dotenv.config()
const PORT = process.env.PORT||8080;
const routes  = require("./router");

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to my backend");
});

app.use("/",routes);

mongoose.connect(process.env.MONGO_URI

).then(()=>{
    app.listen(PORT,()=>{
        console.log(`The serevr is running on ${PORT}`);
    })
}).catch((err)=>{
    console.log("Something went wrong",err);
})