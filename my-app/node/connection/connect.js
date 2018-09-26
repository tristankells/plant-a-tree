var sql = require("mysql");
var connect = function(){
    var conn = new sql.createConnection({
        host     : 'localhost',
        database : 'plantatree',
        user     : 'root',
        password : '',
    });

    return conn;
};

module.exports = connect;