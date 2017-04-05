var express = require('express');
var app = express();

// support libraries
var path = require('path'),
    cors = require('cors'),
    morganLogger = require('morgan'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

app.set('port', (process.env.PORT || 3000));

// make everything in the public folder available
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// just do static file serving for now from public or app/www folder
app.use(express.static(path.join(__dirname, 'app/www')));
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
//
// app.get('/', function(request, response) {
//   response.render('pages/index');
// });

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


