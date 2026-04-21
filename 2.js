const express = require('express');
const app = express();

app.use(express.static("FRONTEND",{index:"1.html"}))
app.listen(7003)