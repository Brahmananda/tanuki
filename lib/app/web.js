var tanuki_appname = '{TANUKI_APPNAME}';
var tanuki_port = {TANUKI_PORT};
var express = require('express');
var app = express(express.logger());
var fs = require('fs');

app.configure(function(){
  app.use(express.bodyParser());
});

app.get('/', function(req, res) {
  var str = "<h1>Success!</h1><br>{APP_NAME} app is running on port {PORT}!<br>@tanuki-dome 2012.";
  str = str.replace("{APP_NAME}",tanuki_appname).replace("{PORT}",tanuki_port);
  res.send(str);
});

app.listen(tanuki_port, function() {
  console.log("Tanuki app " + tanuki_appname + " deployed and listening on port " + tanuki_port);
});
