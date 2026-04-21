var express = require("express")
var app = express();

app.get("/",(req,res)=>
{
    res.send(`<form action="/data" method="get"> 
        <input type="text" name="un"/>  
        <input type="password" name="pass"/>  
        <input type="submit"/>  </form>`)
})

app.get("/data",(req,res)=>
{
    res.send(`<h1>welcome ${req.query.un} </h1> 
        <h2>your password is ${req.query.pass} </h2>`)
})
app.listen(9001)