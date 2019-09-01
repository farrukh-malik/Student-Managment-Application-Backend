"use strict";
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var registrationRouter = require('./routes/registration')();
var authenticationRouter = require('./routes/authentication')();
// const postRouter = require('./routes/post')();
// const commentRouter = require('./routes/comment')();
var errorHandling = require('./utils/error-handling');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api', registrationRouter);
app.use('/api', authenticationRouter);
// app.use('/api', postRouter);
// app.use('/api', commentRouter);
// app.use(errorHandling);
app.listen(3000, function () {
    console.log('app listining on port 3000');
});
