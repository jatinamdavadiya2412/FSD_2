const express = require('express');
const app = express();

var path=require("path")
var sp=path.join(__dirname,"../FRONTEND")
// app.use(express.static(sp,{index:'1.html'}))

app.get("/",(req,res)=>
{
    res.sendFile(sp+"/1.html")
})
app.listen(8009)