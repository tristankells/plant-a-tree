var express = require('express');
var app = express();
var port = process.env.port || 117;

app.get("/products", function(request,response)
{
    response.json({"Message":"LIST OF TREES TO BUY"});
});

app.listen(port, function(){
    var datetime = new Date();
    var message = "PlantATree dataserver running on Port:- " + port + " ,Started at :- " + datetime;
    console.log(message);
});