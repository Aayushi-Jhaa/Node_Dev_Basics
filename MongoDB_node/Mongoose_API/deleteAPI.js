const express= require('express')
require('./config')
const Product= require('./product');


const app = express();

app.use(express.json());  // it will convert every req res into json 


//DELETE API
app.delete('/delete/:_id',async (req,res)=>{
    console.log(req.params);
    let data=await Product.deleteOne(req.params);
    res.send(data);
})


app.listen(5000);