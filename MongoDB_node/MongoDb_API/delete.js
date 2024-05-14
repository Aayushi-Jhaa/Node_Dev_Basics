const dbConnect = require('./mongodb');
const express = require('express');

const app = express();
app.use(express.json());

app.delete('/deleteBook/:id',async(req,res)=>{
    console.log(req.params.id);
    let data = await dbConnect();
    let result = await data.deleteOne({bookId:req.params.id});
    res.send(result);
})

app.listen(5000);