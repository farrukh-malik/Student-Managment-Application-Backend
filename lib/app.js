"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const authentication_1 = require("./routes/authentication");
const registration_1 = require("./routes/registration");
const error_handling_1 = require("./utils/error-handling");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
// const registrationRouter = require('./routes/registration')();
// const authenticationRouter = require('./routes/authentication')();
// const postRouter = require('./routes/post')();
// const commentRouter = require('./routes/comment')();
const schema_execution_1 = require("./models/schema-execution");
const connection = new schema_execution_1.Connection();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api', new authentication_1.User(connection).getRoute());
app.use('/api', new registration_1.Registration().getRoute());
// app.use('/api', authenticationRouter);
// app.use('/api', postRouter);
// app.use('/api', commentRouter);
app.use(new error_handling_1.ErrorHandler().errorHandler);
app.listen(3000, () => {
    console.log('app listining on port 3000');
});
//# sourceMappingURL=app.js.map