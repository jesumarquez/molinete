var express = require('express');
var routes = require("./routes");
var app = express();

routes(app);

var server = app.listen(process.env.PORT, function () {

  var host = process.env.IP
  var port = process.env.PORT

  console.log('Example app listening at http://%s:%s', host, port);

});

