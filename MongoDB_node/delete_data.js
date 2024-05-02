const {MongoClient}= require('mongodb');

const url= 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConn(){
    let conn= await client.connect();
    let db= await conn.db('database');
    return db.collection('books');
}

//Delete data from the database
const deleteData = async ()=>{
    let data = await dbConn();
    let result=await data.deleteOne({title:'Magic'});
    console.log(result);
    if(result.acknowledged){
        console.log("Data deleted successfully");
    }else{
        console.log("Data deletion Failed");
    }
}

deleteData();