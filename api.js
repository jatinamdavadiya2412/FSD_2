var express=require("express")
var router=express.Router()

var obj=[{name:"A",id:101,age:18,city:"Ahmedabad",branch:"Cse"},
    {name:"A",id:102,age:18,city:"Surat",branch:"Cse"},
    {name:"B",id:103,age:19,city:"Ahmedabad",branch:"Csit"},
    {name:"C",id:104,age:20,city:"Rajkot",branch:"Cse"},
    {name:"D",id:105,age:21,city:"Ahmedabad",branch:"Ce"},
    {name:"E",id:106,age:17,city:"Limbdi",branch:"Aiml"}]

router.get("/",(req,res)=>
{
    res.type("text/html")
    for(o of obj)
    {
        res.write(`<h1> Name:${o.name} Age:${o.age} Branch:${o.branch} City:${o.city} id:${o.id} </h1>`)
    }
    res.send()
})

router.get("/id/:id",(req,res)=>
{
    var data=obj.filter(o=>o.id==req.params.id)
    if(data.length>0)
    {
        res.send(data)
    }
    else
    {
        res.send("No data available")
    }
})
router.get("/branch/:branch",(req,res)=>
{
    var data=obj.filter((o)=>o.branch.toLowerCase()==req.params.branch.toLowerCase())
    if(data.length>0)
    {
        res.send(data)
    }
    else
    {
        res.send("No data available")
    }
})

module.exports=router