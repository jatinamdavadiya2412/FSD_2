const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/login">
            <input name="user" placeholder="Name">
            <input name="pass" placeholder="Password">
            <textarea name="msg"></textarea>
            <button>Submit</button>
        </form>
    `);
});

app.get('/login', (req, res) => {
    res.send(`
        Name: ${req.query.user} <br>
        Pass: ${req.query.pass} <br>
        Message: ${req.query.msg} <br>
        <a href="/message?msg=${req.query.msg}">show vowel</a>
    `);
});

app.get('/message', (req, res, next) => {
    next(); 
}, (req, res) => {
    let msg = req.query.msg;
    let count = (msg.match(/[aeiou]/gi) || []).length;
    res.send("Vowel Count is: " + count);
});

app.listen(3000);
