"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const databaseConnectionOption = require('./config');
exports.connection = mysql.createConnection(databaseConnectionOption);
//# sourceMappingURL=connection.js.map