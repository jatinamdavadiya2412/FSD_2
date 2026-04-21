var express = require("express")
var app = express();

var first=(req,res,next)=>
{
    console.log("first middleware")
    next()
}
var second=(req,res,next)=>
{
    console.log("second middleware")
    next()
}
app.use("/",first,second)
app.get("/",(req,res)=>
{
    res.send(`"home page" <br> <a href="/about"> about </a>`)
})
app.get("/about",first,(req,res)=>
{
    res.send(`"About page"`)
})
app.listen(3009)