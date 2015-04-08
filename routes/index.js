module.exports = function(app){
    var express = require("express");
    var dummy = require("./api/dummy");
    
    app.use('/', express.static('public'));
    app.use('/static', express.static('bower_components'));
    
    dummy(app);
}