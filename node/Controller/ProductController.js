var express = require('express');
var router = express.Router();
// Import connection functionality from the SQL Database connection file
var connection = require("../connection/connect")(); 

var routes = function (){
    //default route of the product controller file
    router.route('/login')
        .get(function (req, res){
            // Perform a SELECT * query from the Trees table
            connection.query('SELECT * FROM Trees', function (error, results, fields) {

                //Error Handler
                if (error)
                    throw error;

                // Prints the query result in JSON Format
                res.json(results); 
            });
        });
    return router;
};
module.exports = routes;