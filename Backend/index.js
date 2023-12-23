const express=require('express');

const app=express();

const port=process.env.PORT||5000;
require('dotenv').config();
app.listen(port,(req,res)=>{
    console.log("server is started at",port);
})

app.get('/',(res,data)=>{
    data.send("API is Active");
})