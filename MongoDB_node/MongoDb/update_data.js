const {MongoClient} = require('mongodb')

const url = 'mongodb://localhost:27017';
const client= new MongoClient(url);

async function dbConn(){
    let conn=await client.connect();
    let db= conn.db('database');
    return db.collection('books');
}

//Update Function
const main= async ()=>{
    let collection = await dbConn();
    let result=await collection.updateOne({title:'Up'},{$set:{title:'Down'}});
    // let result=await collection.updateMany({title:'Up'},{$set:{title:'Down'}});
    console.log(result);
}
main();