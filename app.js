var express = require('express');
var bodyParser = require("body-parser");
var routes = require("./routes");
var app = express();

app.use(bodyParser.json());

routes(app);

var server = app.listen(process.env.PORT, function () {

  var host = process.env.IP
  var port = process.env.PORT

  console.log('Example app listening at http://%s:%s', host, port);

});

