var express = require("express")
var app = express();

var student={"Name":"Jaynil","Age":"18"}

app.get('/j1',(req,res)=>{
    res.send(student.Age);
});

app.get('/j2',(req,res)=>{
    res.json(student.Age);
});

app.get('/j3',(req,res)=>{
    res.write(JSON.stringify(student.Age));
    res.send();
});

app.listen(3003,"localhost",100,()=>{console.log("server start")});