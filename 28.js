var express = require("express")
var app = express();
app.use(express.urlencoded())

app.get("/",(req,res)=>
{
    res.send(`<form action="/data" method="post"> 
        <input type="text" name="name"/>  
        <input type="password" name="pass"/>  
        <input type="submit"/>  </form>`)
})

app.post("/data",(req,res)=>
{
    if(req.body.name=="admin" & req.body.pass=="1234")
    {
        res.send("login success")
    }
    else{
        res.send("invalid credentials")
    }
})

app.listen(9002)