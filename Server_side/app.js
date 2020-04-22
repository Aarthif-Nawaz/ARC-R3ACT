/* 
This file handles all the routes.
Author: Shiromi Thevarajan
IIT ID: 2018117

Dependencies: express, cookie-parser, cors
Run 'npm install' before 'npm start' or 'nodemon start'
*/

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require("cors");

var indexRouter = require('./routes/index');
var databaseRouter = require('./db/models/database');
var searchRouter = require('./routes/search.route');
var appDetailsRouter = require('./routes/appdetails.route');
// var bugFixesRouter  = require('./routes/bugfixes.route');
var sentimentRouter  = require('./routes/sentiment.route');
var contactUsRouter  = require('./routes/contactus.route');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', databaseRouter);
app.use('/search', searchRouter);
app.use('/app', appDetailsRouter);
// app.use('/bugfixes', bugFixesRouter);
app.use('/sentiment', sentimentRouter);
app.use('/contactus', contactUsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
