"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const registrationRouter = require('./routes/registration')();
const authenticationRouter = require('./routes/authentication')();
// const postRouter = require('./routes/post')();
// const commentRouter = require('./routes/comment')();
const errorHandling = require('./utils/error-handling');
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
app.listen(3000, () => {
    console.log('app listining on port 3000');
});
//# sourceMappingURL=app.js.map