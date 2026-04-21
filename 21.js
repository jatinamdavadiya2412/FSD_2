var express = require("express")
var app = express();

app.get("/user/:uid/branch/:b",(req,res)=>
    {
        res.send(req.params)
    })
app.listen(7007)