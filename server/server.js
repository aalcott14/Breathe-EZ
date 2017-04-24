var express = require("express");
var path = require("path");

var app = express();
app.use(express.static(path.join(__dirname,"../compiled/")));
app.use(express.static(path.join(__dirname,"../styles")));
app.use(express.static(path.join(__dirname,"../node_modules")));
app.listen(8080,function(){
    console.log("Started listening on port", 8080);
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'../index.html'));
})