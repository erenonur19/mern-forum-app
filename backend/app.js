const express = require('express')
const dbConn=require('./dbConnection')
const User=require('./model/User')
const app=express()

app.get('/', (req,res)=>{
    res.send('Helllllo')
})

app.listen(3000, ()=>{
    dbConn
    console.log('3000 Portu dinleniyor');
})


app.get('')