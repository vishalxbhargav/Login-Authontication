const http=require('http');
const fs =require('fs');

const myserver=http.createServer((req,res)=>{
    const log=`${Date.now()}:${req.url} New Req Received`;
    fs.appendFile('./log.txt',log,(err,data)=>{
        switch(req.url){
            case "/":res.end("HomePage");
            break
            case "/about":res.end("Vishal Bhargav");
            break
            case "/work":res.end("Developer");
            break
            default:res.end("404");
        }
        
    });
   
});
myserver.listen(3000,()=>{
    console.log("seerver sstartted");
});
