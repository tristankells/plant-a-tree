var express = require('express');
var router = express.Router();
// Import connection functionality from the SQL Database connection file
var connection = require("../connection/connect")(); 

// MailGun import
var api_key = '';
var domain = '';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var routes = function (){


    router.route('/getitems')
        .get(function (req, res){
            // Perform a SELECT * query from the Trees table
            connection.query('SELECT * FROM items', function (error, results, fields) {

                //Error Handler
                if (error)
                    throw error;

                // Prints the query result in JSON Format
                res.json(results[0].price); 
            });
        });



    // ------------ SHOPPING CART API CALLS -------------------------- 

    // Removes all of a particular product from users shopping cart
    router.route('/removeproduct/:item')
        .post(function (req, res){
            try {
                connection.query('DELETE FROM `'+req.body.cart+'` WHERE itemName LIKE "'+req.params.item+'"', function (error, results, fields) {
                    res.status(200).json("Product: "+req.params.item+" has been removed on cart: "+req.body.cart); 
                });
            } catch (error) {
                res.status(200).json("Something went wrong with removing your product from cart");
            }   
        });

    // Adds product to users shopping cart
    router.route('/addproduct/:item')
        .post(function (req, res){
            try {
                connection.query('INSERT INTO `'+req.body.cart+'`(`itemName`, `price`, `Deliverable`, `dateAdded`, `purchased`) VALUES ("'
                +req.params.item+'",'+req.body.price+', '+req.body.deliverable+', "'+new Date()+'", "N")', function (error, results, fields) {
                    res.status(200).json("Product: "+req.params.item+" has been added to cart: "+req.body.cart); 
                });
            } catch (error) {
                res.status(200).json("Something went wrong with adding your product to cart");
            }   
        });
    
    router.route('/purchase')
        .post(function (req, res){
            try {
                // Email data to send purchase information
                var data0 = {
                    from: 'PlantATree <maxfrancis212@gmail.com>',
                    to: 'maxfrancis212@gmail.com',
                    subject: 'Purchase',
                    text: 'Thank you for your purchase!'
                  };

                // Email data to send purchase information
                var data1 = {
                    from: 'Orders <maxfrancis212@gmail.com>',
                    to: 'maxfrancis212@gmail.com',
                    subject: 'Order',
                    text: 'An order has been placed!'
                  };
                // Send an email using the mailgun API 
                mailgun.messages().send(data0, function (error, body) {});
                mailgun.messages().send(data1, function (error, body) {});

                res.status(200).json("Purchase made, An email shall be sent out with additional information"); 
            } catch (error) {
                res.status(200).json("Something went wrong with finalizing your purchase");
            }   
        });

    return router;
};
module.exports = routes;