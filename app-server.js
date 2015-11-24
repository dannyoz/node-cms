var express = require('express'),
    http    = require('http'),
    fs      = require('fs');    

var app = express();
var port = 3000;
var server = app.listen(port);
var routes = require('./app/routing/routes.json').routes;


//For static asset files
['css', 'img', 'js', 'views', 'api', 'msg'].forEach(function (dir){
    app.use('/'+dir, express.static(__dirname+'/dist/'+dir));
});


routes.forEach(function(route){
  app.get(route.path, function(req, res) {
    res.sendfile('./dist/index.html');
  });
});

app.get('/api/:route',function(req,res){

  var json = require('./app/api/'+req.params.route+'.json');

  res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(json));
});

console.log("Express server listening on port ",port);