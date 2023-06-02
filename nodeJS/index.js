const { isUtf8 } = require('buffer');
const express = require('express');
const {readFile}=require('fs');
const app =express();
app.get('/',(request,response)=>{
    readFile('index.html','utf8',(err,data)=>{
        if(err){
            response.status(500).send('Sorry, out of order');
        }
        response.send(data);
    })   
})
app.listen(process.env.PORT || 3000 , ()=>{
    console.log('app available on http://localhost:3000')
})


// Path: index.html