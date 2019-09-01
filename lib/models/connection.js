"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const databaseConnectionOption = require('./config');
class DatabaseCreationConnection {
}
exports.DatabaseCreationConnection = DatabaseCreationConnection;
DatabaseCreationConnection.connection = mysql.createConnection(databaseConnectionOption);
//# sourceMappingURL=connection.js.map