const express= require('express')
require('./config')
const Product= require('./product');

const app = express();

app.use(express.json());  // it will convert every req res into json 


//UPDATE API
app.put('/update/:_id',async (req,res)=>{
    console.log(req.params);
    console.log(req.body);
    let data=await Product.updateOne(req.params,{$set:req.body});
    res.send(data);
})


app.listen(5000);