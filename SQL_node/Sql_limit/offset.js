var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password",
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    // 5 data entries from 3rd position 
    // var sql = "SELECT * FROM customers LIMIT 2,5";
    var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    con.query(sql, function(err,result){
        if (err) throw err;
        console.log(result);
    });
});