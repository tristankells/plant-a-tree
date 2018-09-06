var express = require('express');
var app = express();
// Desired port number to connect to (Masterchief John-117)
var port = process.env.port || 117;

// Import and use the ProductController JS
var productController = require('./Controller/ProductController')();
app.use("/api/products", productController);

// Test the API is working and can handle a simple GET request
app.get("/workingtest", function(request,response)
{
    response.json({"Message":"API IS SUCCESSFULLY HANDLING API REQUESTS"});
});

app.listen(port, function(){

    // Console log confirmation of dataserver running on desired port
    var datetime = new Date();
    var message = "PlantATree dataserver running on Port:- " + port + " ,Started at :- " + datetime; 
    console.log(message);
});