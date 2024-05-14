const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/database');

//Creating A Schema
const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})


//READING THE PRODUCT FROM MONGODB
const readInDB= async ()=>{
    //Create a Model for Schema
    const Product= mongoose.model('products',productSchema);

    //Reading Data
    let data= await Product.find();
    console.log(data);
}

readInDB();
