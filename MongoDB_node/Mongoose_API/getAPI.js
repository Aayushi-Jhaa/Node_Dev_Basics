const express= require('express')
require('./config')
const Product= require('./product');


const app = express();

app.use(express.json());  // it will convert every req res into json 



//GET API
app.get('/list',async (req,res)=>{
    let result= await Product.find();
    res.send(result);
})



app.listen(5000);