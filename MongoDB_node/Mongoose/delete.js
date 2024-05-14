const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/database');

//Creating A Schema
const productSchema= new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    category:String
})

//DELETING THE PRODUCT in MONGODB

const deleteInDB= async ()=>{
    //Create a Model for Schema
    const Product= mongoose.model('products',productSchema);

    //Deleting Data
    let data= await Product.deleteOne({name:"Iphone 14 pro Max"});
    console.log(data);
}

deleteInDB();