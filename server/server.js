const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname,"../client/compiled/")));
app.use(express.static(path.join(__dirname,"../client/styles")));
app.use(express.static(path.join(__dirname,"../node_modules")));

app.use(bodyParser.json());

app.listen(8080,function(){
    console.log("Listening on port", 8080);
})

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'../client/index.html'));
})
