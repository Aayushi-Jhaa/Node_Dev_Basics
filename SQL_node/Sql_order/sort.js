var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "password",
    database: "mydb"
});

con.connection(function(err){
    if (err) throw err;
    //con.query("SELECT * FROM customers ORDER BY name DESC", function (err, result) {
    con.query("SELECT * FROM customers ORDER BY name", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});