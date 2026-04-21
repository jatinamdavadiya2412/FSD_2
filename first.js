var express = require("express")
var app = express();

app.get("/",(req,res)=>{
    //res.set("Content-type","text/html");
    res.type("text/html");
    //res.setHeader("Content-Type","text/html")
    res.write("<H3>Hi!</H3>");
    res.send();
});

app.get("/about",(req,res)=>{
    res.send('<H2 style="color:purple">About</H2>')
});
app.listen(3000,"localhost",100,()=>{console.log("server start")}); 