const express = require('express');
const dbConn = require('./mongodb')

const app = express();

app.get('/getBooks', async(req,res)=>{
    let data = await dbConn();
    data = await data.find().toArray();
    //console.log(data);
    res.send(data);
})

app.listen(5000)