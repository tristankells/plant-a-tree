var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
var connection = require("../connection/connect")();

var routes = function (){

    //Login Endpoint
    router.route('/login/:user')
        .post(function (req, res){
            /* Uncomment this out for hash value for an account for manual account creation while registration endpoint is inactive
            let hash = bcrypt.hashSync(req.body.password, 10);
            console.log('password is: '+req.body.password+' ,Hashed password for '+req.params.user+' is '+hash); */

            // SQL query to find find user by username
            connection.query('SELECT hash FROM `users` WHERE username LIKE "'+req.params.user+'"', function (error, results, fields) {
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
            connection.query('SELECT username FROM `users` WHERE users.username LIKE "'+req.body.user+'"', function (error, results, fields) {
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
                        console.log(hashPass);
                        // SQL query to insert user into the database
                        connection.query('INSERT INTO `users`(`username`, `hash`, `created_at`) VALUES ("'+req.body.user+'","'+hashPass+'","'+new Date()+'")', function (error, results, fields) {
                            res.status(200).json("Account created"); 
                        });

                    } catch (error) {
                        res.status(200).json("Something went wrong with creating your account");
                    }
                }      
            });
            
        });
    return router;
};
module.exports = routes;