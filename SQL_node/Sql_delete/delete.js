var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    username: "user",
    password: "password",
    database: "mydb"
});

con.connect(function(err){
    if (err) throw err;
    var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
    con.query(sql, function(err, result){
        if (err) throw err;
        console.log("No. of records deleted: " +result.affectedRows );
    });
});

//number of affected Rows
//console.log(result.affectedRows)