var express = require("express");
var app = express();
var path = require('path');

module.exports = function(app){
    
    app.get('/exercise', function(req,res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
        console.log("exercise is rendered");
    })
}
