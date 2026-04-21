const express = require('express');
const app = express();
const sess = require('express-session');
app.use(sess({secret:'LJU123',resave:false,saveUninitialized:false}))  // resave:false = jyare jroor hse tyarej save karavse   and if true then every time save krse

app.get("/",(req,res)=>
{
    if(req.session.page_views)
    {
        req.session.page_views++;
        res.send(`<h1> you have visited ${req.session.page_views} time </h1>`)
    }
    else
    {
        req.session.page_views=1
        res.send(`<h1> welcome to my website </h1>`)
    }
})
app.listen(7001)