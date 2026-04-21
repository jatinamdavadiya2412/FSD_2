var express = require("express")
var app = express();
app.use(express.urlencoded())
app.get("/",(req,res)=>
{
    res.send(`<form action="/data" method="post"> 
        <input type="text" name="un"/>  
        <input type="password" name="pass"/>  
        <input type="submit"/>  </form>`)
})
app.post("/data",(req,res)=>
{
    res.send(`<h1>welcome ${req.body.un} </h1> 
        <h2>your password is ${req.body.pass} </h2>`)
})
app.listen(9002)