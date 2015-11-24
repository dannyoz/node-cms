var express = require('express'),
    http    = require('http'),
    fs      = require('fs');    

var app = express();
var port = 3000;
var server = app.listen(port);


//For static asset files
['css', 'img', 'js', 'views', 'api', 'msg'].forEach(function (dir){
    app.use('/'+dir, express.static(__dirname+'/dist/'+dir));
});


app.get('/', function(req, res) {
  res.sendfile('./dist/index.html');
});




console.log("Express server listening on port ",port);