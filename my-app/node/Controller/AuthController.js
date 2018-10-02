var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var connection = require("../connection/connect")();

// MailGun import
var api_key = '1322412341';
var domain = 'sads';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});

var routes = function (){

    //Login Endpoint
    router.route('/login/:user')
        .post(function (req, res){

            // SQL query to find find user by username
            connection.query('SELECT hash FROM `userlist` WHERE username LIKE "'+req.params.user+'"', function (error, results, fields) {
                // Try / Catch statement to catch error from null return from invalid username
                try {
                    // If else checking hashes against each other for matching decrytped value
                    if(bcrypt.compareSync(req.body.password, results[0].hash) == true){
                        res.status(200).json("You have successfully logged in, welcome back: "+req.params.user);
                    }else{
                        res.status(200).json("Incorrect login");
                    }  
                } catch (error) {
                    res.status(200).json("Incorrect login");
                }      
            });
        });

    // Signup endpoint
    router.route('/signup')
        .post(function (req, res){
            // SQL query to check if username exists
            connection.query('SELECT username FROM `userlist` WHERE userlist.username LIKE "'+req.body.user+'"', function (error, results, fields) {
                /* Try / Catch statement to catch error from null return from invalid username which would indicate a
                   usuable name, in case this was indeed an error though a second try catch is used */
                try {
                    if (results[0].username == req.body.user){
                        res.status(200).json("Username already exists");
                    }
                } catch (e) {
                    try {

                        // Hash the password send in the request
                        var hashPass = bcrypt.hashSync(req.body.password, 10);
                        
                        // SQL Query to create a cart table for a user to allow for shopping cart history
                        connection.query('CREATE TABLE '+req.body.user+'cart (itemName VARCHAR(50), price FLOAT, Deliverable tinyint, dateAdded VARCHAR(80), purchased char(1));', function (error, results, fields) {});

                        // SQL query to insert user into the database
                        connection.query('INSERT INTO `userlist`(`username`, `hash`, `created_at`, `cartid`) VALUES ("'+req.body.user+'","'+hashPass+'","'+new Date()+'", "'+req.body.user+'cart")', function (error, results, fields) {

                            // Email data to send confirming that the user has signed up
                            var data = {
                                from: 'PlantATree <maxfrancis212@gmail.com>',
                                to: 'maxfrancis212@gmail.com',
                                subject: 'Signup',
                                text: 'Welcome to plant-a-tree!'
                              };
                            // Send an email using the mailgun API 
                            mailgun.messages().send(data, function (error, body) {});

                            res.status(200).json("Account created"); 
                        });

                    } catch (error) {
                        res.status(200).json("Something went wrong with creating your account");
                    }
                }      
            });
            
        });

    // Address obtaining endpoint
    router.route('/getaddress/:user')
        .get(function (req, res){
            // Sends back users address
            connection.query('SELECT `address` from `userlist` WHERE `username` = "'+req.params.user+'"', function (error, results, fields) {
                //Error Handler
                if (error)
                    throw error;
                // Prints the query result in JSON Format
                res.json(results); 
            });
        });
    
    // Logout endpoint
    router.route('/logout')
    .get(function (req, res){
            // Prints the query result in JSON Format
            res.json("Thank you for shopping at plant-a-tree admin!"); 
        });

    // Address obtaining endpoint
    router.route('/updateaddress/:user')
        .post(function (req, res){
            // Sends back users address
            connection.query('UPDATE `userlist` SET `address`="'+req.body.address+'" WHERE `username`LIKE "'+req.params.user+'"', function (error, results, fields) {
                //Error Handler
                if (error)
                    throw error;
                // Prints the query result in JSON Format
                res.json("user address successfully updated"); 
            });
        });

    return router;
};
module.exports = routes;