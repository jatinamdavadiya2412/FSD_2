var mult=require("multer")
var express=require("express")

var app=express()
var api=require("./api")
const { fileLoader } = require("ejs")
app.use(express.static(__dirname,{index:"ch61.html"}))
var store=mult.diskStorage({destination:"my",filename:(req,file,cb)=>
{
    cb(null,file.originalname)
    console.log(file)
}
})

var upload=mult({storage:store})
    app.post("/upload",upload.single("mydoc"),(req,res)=>
{
    var file=req.file
    console.log(file)
    if(file)
    {
        res.send(`<h1>File<span style="color:red"> ${file.originalname}</span> has been uploaded in folder ${file.destination}</h1>`)
    }
})


app.listen(8009)