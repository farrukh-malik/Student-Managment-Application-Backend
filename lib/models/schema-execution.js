"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const schema = require('./schema');
class Connection {
    constructor() {
        this.createConnection();
    }
    createConnection() {
        connection_1.DatabaseCreationConnection.connection.query(schema.CREATE_REGISTRATION_TABLE, (err, result) => {
            if (err) {
                throw err;
            }
            console.log('Registration Table Created');
        });
        connection_1.DatabaseCreationConnection.connection.query(schema.CREATE_AUTHENTICATION_TABLE, (err, result) => {
            if (err) {
                throw err;
            }
            console.log('Authentication Table Created');
        });
        connection_1.DatabaseCreationConnection.connection.query(schema.ERROR_LOG_STRUCTURE, (err, result) => {
            if (err) {
                throw err;
            }
            console.log('ERROR_LOG_STRUCTURE Table Created');
        });
    }
    getConnection() {
        return connection_1.DatabaseCreationConnection.connection;
    }
}
exports.Connection = Connection;
//# sourceMappingURL=schema-execution.js.map