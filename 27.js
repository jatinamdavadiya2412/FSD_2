var express = require("express")
var app = express();
app.use(express.urlencoded())

var checkpass = (req, res,next) => 
{
    var haspass = true
    if (haspass)
    {
        next()
    }
    else 
    {
        res.send("no entry")
    }
}
var data = (req,res,next) => 
    {
    req.name = "AJ"
    console.log("user verified")
    next()
    }

app.get("/", checkpass, data, (req, res) => 
    {
        res.send(`<h1> welcome ${req.name} </h1>`)
    })
app.listen(9001)