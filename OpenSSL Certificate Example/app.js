const express=require('express')
const app=express()
app.get("/",(req,res)=>{
    res.send("Connection Is Secure")
})
module.exports={
    app
}