var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');

var app = express();
app.use('/node_modules',express.static(__dirname + "/node_modules" ));
app.use('/app',express.static(__dirname + "/app" ));

app.get('/', function(req,res){
	res.sendfile('index.html');
});

app.listen('3000', function (){
    console.log("Listening for Local Host 3000");
});