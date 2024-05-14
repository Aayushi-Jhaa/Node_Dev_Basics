const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/database');

//Creating A Schema
const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

const saveInDB= async ()=>{
    //Create a Model for Schema
    const Product= mongoose.model('products',productSchema);

    //Creating a Product
    let data= new Product({
        name:"Iphone 14 pro",
        price:120000,
        brand:"Iphone",
        category:"SmartPhones"
    });

    //saving the Product
    const result = await data.save();

    //print result
    console.log(result)
}

saveInDB();