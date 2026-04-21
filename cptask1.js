// NAS chap5 pdf que no 7
// imp que for 

const express = require('express');
const app = express();
app.use(express.urlencoded())
var cp=require("cookie-parser")
app.use(cp())

app.use(express.static(__dirname,{index:'cptask1.html'}))

app.post('/submit', (req, res) => {
    var {uname,email,message,rating}=req.body
    var feedback={uname,email,message,rating}
    res.cookie("feedback",feedback,{maxAge:10000})
    res.send(`<h1> Thank uu! </h1> 
        <a href="/view"> view </a>`)
});

app.get("/view", (req, res) => {
    var fb = req.cookies.feedback;

    if (fb) {
        res.send(`
            <h1> Thank uu! ${fb.uname} </h1>
            <h2>Your Feedback:</h2>
            <p>Name: ${fb.uname}</p>
            <p>Email: ${fb.email}</p>
            <p>Message: ${fb.message}</p>
            <p>Rating: ${fb.rating}</p>
            <br>
            <a href="/logout">Logout</a>
        `);
    } else {
        res.send('<h1>No Feedback available</h1><a href="/">go to logout</a>');
    }
});

app.get('/logout', (req, res) => {
    res.clearCookie('feedback');
    res.redirect('/');
});

app.listen(3000);