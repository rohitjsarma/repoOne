var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var proddata = require('./routes/prodDetails');
var match1 = require('./routes/match1');
var match2 = require('./routes/match2');
var stdDetails = require('./routes/stdDetails');
var stdnDetails=require('./routes/stdnDetails');
var lapDetails=require('./routes/laptops');
var mobDetails=require('./routes/mobDetails');
var mensTop=require('./routes/menTop');
var womensTop = require('./routes/wmentop');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.listen(8081, function(){
	console.log("Server is listing at 8081");
});
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products/getproductsinfo', proddata);
app.use('/cricinfo/matchDetails/match1', match1);
app.use('/cricinfo/matchDetails/match2', match2);
app.use('/getStudentDetails', stdDetails);
app.use('/getStudentDetails/student',stdnDetails);
app.use('/getLapDetails/laptops',lapDetails);
app.use('/getmobilesinfo/mobiles', mobDetails)
app.use('/getmensTopsinfo/menstop', mensTop)
app.use('/getwomensTopsinfo/womenstop',womensTop)


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
  res.render('error');
});

module.exports = app;
