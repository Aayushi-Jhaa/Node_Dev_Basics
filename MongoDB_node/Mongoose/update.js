const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/database');

//Creating A Schema
const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})


//UPADING THE PRODUCT in MONGODB

const updateInDB= async ()=>{
    //Create a Model for Schema
    const Product= mongoose.model('products',productSchema);

    //Updating Data
    let data= await Product.updateOne(
        {name:"Iphone 14 pro"},
        {$set:{name:"Samsung",price:14000}});
    console.log(data);
}

updateInDB(); //calling the Method