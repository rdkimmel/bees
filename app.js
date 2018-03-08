var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local');

app.set('view engine', 'ejs');

//home page route
app.get('/', function(req, res) {
	res.render('landing');
});

//contact page route
app.get('/contact', function(req, res) {
	res.render('contact');
});

//links page route
app.get('/links', function(req, res) {
	res.render('links');
});

//membership & bylaws page route
app.get('/membership', function(req, res) {
	res.render('membership');
});

//updates page route
app.get('/updates', function(req, res) {
	res.render('updates');
});

//media page route
app.get('/media', function(req, res) {
	res.render('media');
});


app.listen(1337, '127.0.0.1', function() {
	console.log('app is running');
});
