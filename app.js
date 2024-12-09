const express = require('express')
require('dotenv').config()

const app = express();

const port = 3000

app.get("/",(req, res)=>{
     res.send("Hello World!")
})

app.get("/arsul",(req, res)=>{
    res.send("Please ")
})

app.listen(process.env.PORT,()=>{
   console.log((`App listening on port: ${process.env.PORT}`));
   

})