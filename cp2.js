const express = require('express');
const app = express();
var cp=require("cookie-parser")
app.use(cp())
app.use(express.urlencoded())
app.use(express.static(__dirname,{index:'cp2.html'}))

app.post("/next",(req,res)=>
{
    var fn=req.body.fn
    var ln=req.body.ln
    var pw=req.body.pw

    res.cookie("fname",fn)    
    res.cookie("lname",ln)
    res.cookie("password",pw)
    res.redirect("/admin")
})
app.get("/admin",(req,res)=>
{    
    res.clearCookie("lname")    
    res.send(`<h1> Welcome ${(req.cookies.fname)} ${(req.cookies.lname)}</h1>
    <h2> Your password is ${req.cookies.password} </h2>`)
})
app.listen(7000)