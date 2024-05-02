const {MongoClient}=require('mongodb'); //1st way
//const MongoClient=require('mongodb').MongoClient; //2nd way

// Connection URL
const url='mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const database='database';

async function getData(){
     // Use connect method to connect to the server
    let result=await client.connect(); //connected
     console.log('Connected successfully to server');
    let db=result.db(database); //giving database name to client
    let collection=db.collection('books'); //giving collection name to database
    let response=await collection.find().toArray(); //reading data from collection
    console.log(response); //priting that data
}

getData();