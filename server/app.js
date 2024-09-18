var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser=require('body-parser')
var indexRouter = require('./routes/student');
var cors=require('cors')
var adminRouter=require('./routes/admin')
var Form =require('./models/form')
const dotenv = require('dotenv');
const ConnectDb= require('./config/dbconnect');
var formRouter=require('./routes/form')
var archiveModal=require('./models/archive');
const { authenticateUser } = require('./middleware/auth');

var app = express();
dotenv.config({path:'./.env'})

app.use(cors({
  origin:"http://localhost:3000",
  credentials:true,
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended :false}))  



app.use('/', indexRouter);
app.use('/admin',adminRouter) 
app.use('/form',formRouter)
app.get('/archive', authenticateUser,async (req, res) => {
  try {
    let data = await archiveModal.find().populate('student');
    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving data');
  }
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});



ConnectDb()
module.exports = app;
