const {MongoClient} = require('mongodb');
const url='mongodb://localhost:27017';
const client= new MongoClient(url);

async function dbConnect(){
    let conn=await client.connect();
    let db=await conn.db('database');
    return db.collection('books');
}
module.exports = dbConnect;