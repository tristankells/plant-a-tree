var express = require('express');
var router = express.Router();
// Import the bcrypt library
const bcrypt = require('bcrypt');
// Import connection functionality from the SQL Database connection file
var connection = require("../connection/connect")();

var routes = function (){
    //Login Endpoint
    router.route('/login/:user')
        .post(function (req, res){
            // Perform a JSON filler with Bcrypt test
            let hash = bcrypt.hashSync(req.body.password, 10);

            // Uncomment this out for hash value for an account for manual account creation while registration endpoint is inactive
            console.log('password is: '+req.body.password+' ,Hashed password for '+req.params.user+' is '+hash);

            connection.query('SELECT hash FROM `users` WHERE users.username LIKE "'+req.params.user+'"', function (error, results, fields) {
                // Try / Catch statement to catch error from null return from invalid username
                try {
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
    return router;
};
module.exports = routes;