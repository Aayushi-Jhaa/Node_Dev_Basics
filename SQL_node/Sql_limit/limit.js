var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password",
    database: "mydb"
});

con.connect(function(err){
    if (err) throw err;
    var sql = "SELECT * FROM customers LIMIT 5";
    con.query(sql, function(err,reult) {
        if (err) throw err;
        console.log(result);
    });
});