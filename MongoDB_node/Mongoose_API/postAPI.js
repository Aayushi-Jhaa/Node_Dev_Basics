const express= require('express')
require('./config')
const Product= require('./product');


const app = express();

app.use(express.json());  // it will convert every req res into json 

app.post('/create',async (req,res)=>{
        let data=new Product(req.body);
        let result=await data.save();
        console.log(result);
        console.log(req.body);
        res.send("Done!");
})

app.listen(5000);