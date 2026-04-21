const express = require('express');
const app = express();
var cp=require("cookie-parser")
app.use(cp())
app.get("/",(req,res)=>
{
    res.cookie("fname","test")    // (name,value)
    res.cookie("lname","test1")
    res.cookie("subject","fsd2",{maxAge:5000})    // cookie will stay 5 sec
    res.cookie("email","test@gmail.com",{expires:new Date(Date.now()+10000)})        // after 10 sec
    res.clearCookie("lname")     // for clear specific cookie 
    res.send(req.cookie)
})
app.listen(5000)

// may 1 que of them will be in exam
