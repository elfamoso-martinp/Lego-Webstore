const express = require('express');
const path = require('path');
var cookieParser = require('cookie-parser');
var app = express();
var createError = require('http-errors');

const port = 3000;

var indexRouter = require('./routes/router');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use(function(req, res, next) {
    next(createError(404));
});

app.listen(port, () => {
    console.log('Le serveur est lancé sur le port ' + port);
})

app.use(function(err, req, res, next) {

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};


    res.status(err.status || 500);
    res.render('error.ejs');
});

module.exports = app;