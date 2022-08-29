const express = require('express')
const dbConn=require('./db/dbConnection')
const User=require('./model/User')
const cors=require('cors')
const app=express()
app.use(cors())
app.use(express.json())
// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

app.use("/api/auth", require("./auth/route"))



app.get('/', (req,res)=>{
    res.send('Helllllo')
})

app.listen(8080, async()=>{
    await dbConn()
    console.log('8080 Portu dinleniyor');
})


app.get('')