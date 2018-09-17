var express = require('express');
var router = express.Router();
// Import connection functionality from the SQL Database connection file
var connection = require("../connection/connect")(); 

// MailGun import
var api_key = '4a94b9ddc7e28006170e29b9e7ab5a0b-8889127d-d9d89be0';
var domain = 'sandboxdc705a9195684b13948ef2946002cf14.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var routes = function (){
    //default route of the product controller file
    router.route('/gettrees')
        .get(function (req, res){
            // Perform a SELECT * query from the Trees table
            connection.query('SELECT * FROM items', function (error, results, fields) {

                //Error Handler
                if (error)
                    throw error;

                // Prints the query result in JSON Format
                res.json(results); 
            });
        });
    router.route('/removeproduct')
        .post(function (req, res){
            try {
                res.status(200).json("Product: Pine has been removed on cart: 4521"); 
                // });
            } catch (error) {
                res.status(200).json("Something went wrong with removing your product from cart");
            }   
        });

    router.route('/addproduct')
        .post(function (req, res){
            try {
                res.status(200).json("Product: Apple Sapling has been added to cart: 4521"); 
                // });
            } catch (error) {
                res.status(200).json("Something went wrong with adding your product to cart");
            }   
        });
    
    router.route('/purchase')
        .post(function (req, res){
            try {
                res.status(200).json("Purchase made on cart: 4521 by user: admin"); 
                // });
            } catch (error) {
                res.status(200).json("Something went wrong with finalizing your purchase");
            }   
        });

    return router;
};
module.exports = routes;