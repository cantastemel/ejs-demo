// server.js
var express = require('express');
var app = express();

// Set the view engine
app.set('view engine', 'ejs');

// Render home page
app.get('/', function (req, res) {
    res.render('pages/index');
});

// Render about page
app.get('/about', function (req, res) {
    res.render('pages/about');
});



app.listen(3000, function(){
    console.log('Listening port 3000.');
});