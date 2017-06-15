var express = require("express");
var path = require("path");
var bodyParser = require('body-parser')

var app = express();

app.use(express.static(path.join(__dirname,"../client/compiled/")));
app.use(express.static(path.join(__dirname,"../client/styles")));
app.use(express.static(path.join(__dirname,"../node_modules")));

app.use(bodyParser.json());

app.listen(8080,function(){
    console.log("Started listening on port", 8080);
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'../client/index.html'));
})
