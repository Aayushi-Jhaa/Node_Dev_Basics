const {MongoClient} = require('mongodb');

const url= 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function dbConn(){
    let conn=await client.connect();
    let db= conn.db('database');
    return db.collection('books');
}

const insert =async ()=>{
    const collection=await dbConn();
    const result=await collection.insertOne({title:'Up',genres:['love', 'adveture'], rated:'PG-13'});
    console.log(result);
    if(result.acknowledged){
        console.log('Data Inserted successfully');
    }else{
        console.log('Data Insertion Failed');
    }
}

insert();