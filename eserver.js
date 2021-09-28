const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/contact',(req,res)=>{
    res.send('Contact Us- 1234567890')
})

app.listen(port,() =>{
    console.log('example app at http://localhost:${port}')
})