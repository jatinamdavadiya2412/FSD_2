const express = require('express');
const app = express();
const session = require('express-session');
app.use(session({secret:"nas",cookie:{maxAge:1500},name:"login"}))

app.use(express.urlencoded())
app.use(express.static(__dirname,{index:'cptask2.html'}))
 
app.post("/savesession",(req,res)=>
{
    req.session.uname=req.body.uname
    req.session.password=req.body.password
    res.redirect("fetchdata")
})

app.get("/fetchdata", (req, res)=> 
    {
    if(req.session.uname==='admin' && req.session.password==='admin@123')
    {
        res.send(`<h1> welcome ${req.session.uname} </h1>  <a href="destroy"> logout </a>`)
    }
    else
    {
        res.send(`<h1> please enter valid username and password </h1> <a href="/"> login </a>`)
    }
});

app.get("/destroy",(req,res)=>
{
    req.session.destroy()
    res.send(`<h1> session destroyed </h1> <a href="/"> login </a>`)
})
app.listen(7003)

