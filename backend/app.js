const express = require('express')
const dbConn=require('./db/dbConnection')
const User=require('./model/User')
const app=express()
app.use(express.json())
// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

app.use("/api/auth", require("./auth/route"))



app.get('/', (req,res)=>{
    res.send('Helllllo')
})

app.listen(3000, async()=>{
    await dbConn()
    console.log('3000 Portu dinleniyor');
})


app.get('')