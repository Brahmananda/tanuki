// Imports
var express = require('express');
var app = express();
var server = require('http').createServer(app);

var info = {
	name:'{TANUKI_APPNAME}',
	brand:'powered by tanuki'
};

var port = {TANUKI_PORT}

// Expres config
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.set('view options', { layout: false });
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  //app.use(express.methodOverride());
  //app.use(express.session({ secret: 'your secret here' }));
  //app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

// 'index'
app.get('/', function(req, res) {
	res.render('index',info);
});

// Start webserver
server.listen(port, function() {
  console.log(info.name + " app deployed and listening on port " + port);
});
