var mult=require("multer")
var express=require("express")

var app=express()
var api=require("./api")
const { fileLoader } = require("ejs")
app.use(express.static(__dirname,{index:"ch62.html"}))
var store=mult.diskStorage({destination:"my",filename:(req,file,cb)=>
{
    cb(null,file.originalname)
    console.log(file)
}
})

var upload=mult({storage:store})
    app.post("/upload",upload.array("mydoc",5),(req,res)=>
{
    var file=req.files
    console.log(file)
    if(file)
    {
        res.type("text/html")
        for(f of file)
        {
            res.write(`<h1>File ${file.originalname} has been uploaded</h1>`)
        }
        res.send()
    }
})


app.listen(8009)