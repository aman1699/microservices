const mysql = require('mysql');
var mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aman@123",
    database: "aman",
    multipleStatements: true,
    
});
//console.log(mysqlConnection)
mysqlConnection.connect((err) => {
    if (!err) {
        console.log("Connected");
    }
    else {
        console.log("Connection failed");
    }
})

module.exports = mysqlConnection;