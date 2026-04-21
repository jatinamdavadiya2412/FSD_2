var express = require("express")
var app = express();
app.use(express.urlencoded())
app.get("/",(req,res)=>
{
    res.send(`<form action="/calc" method="post"> 
        <input type="number" name="num1"/>  
        <input type="number" name="num2"/>  
        <select name="opration"> <option value="sum">sum</option> <option value="sub">sub</option> </select>
        <input type="submit"/>  </form>`)
})
app.post("/calc",(req,res)=>
{
    var num1=parseInt(req.body.num1)
    var num2=parseInt(req.body.num2)
    var op=req.body.opration
    if(op=="sum")
    {
       res.send(`<h1> ADD of ${num1} and ${num2} is  ${num1+num2}</h1>`)
    }
    else
    {
        res.send(`<h1> SUB of ${num1} and ${num2} is  ${num1-num2}</h1>`)
    }
})
app.listen(9003)