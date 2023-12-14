const express=require('express');

const app=express();
app.listen(3000,(req,res)=>{
    console.log("server is started");
})

app.get('/',(res,data)=>{
    data.send("API is Active");
})