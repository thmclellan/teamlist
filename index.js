var express = require('express');
// support libraries
var path = require('path'),
    cors = require('cors'),
    morganLogger = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    fs = require('fs');

var app = express();
app.set('port', (process.env.PORT || 3000));

// just do static file serving for now from ./app/www folder if it exists or ./public
var appStaticPath = path.join(__dirname, 'app/www'); // preferred path
var staticPath = path.join(__dirname, 'public'); // backup path

if (fs.existsSync(appStaticPath)) {
    staticPath = appStaticPath;
    console.log("serving from app/www");
}
console.log("\nappStaticPath:" + appStaticPath);
console.log("\nstaticPath:" + staticPath);
app.use(cors());
// This is required to avoid permission issues with cross domain function calls

app.use(express.static(appStaticPath));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(morganLogger('dev'));

// We're primarily in a JSON environment interacting with the Angular Ionic client, so
// Use the 'body-parser' and 'method-override' middleware functions

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

// Basic routing
require('./routes/task.server.routes')(app);

//
// app.get('/', function(request, response) {
//   response.render('pages/index');
// });
//
// Basic views
// views is directory for all template files
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


