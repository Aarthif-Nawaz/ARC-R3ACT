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
var databaseRouter = require('./routes/database');
var reviewsRouter = require('./routes/reviews');
var searchRouter = require('./routes/search');
var appDetailsRouter = require('./routes/appDetails');
var keyWordsRouter  = require('./routes/catergorizeReviews');
var classifiedRouter  = require('./routes/classifiedReviews');
var sentimentRouter  = require('./routes/overallSentiment');
var dataScienceRouter  = require('./routes/dataScience');
var contactUsRouter  = require('./routes/contactUs');
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
app.use('/reviews', reviewsRouter);
app.use('/search', searchRouter);
app.use('/app', appDetailsRouter);
app.use('/keywords', keyWordsRouter);
app.use('/classified', classifiedRouter);
app.use('/sentiment', sentimentRouter);
app.use('/datascience', dataScienceRouter);
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
