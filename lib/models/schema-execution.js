"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./connection");
const schema = require('./schema');
connection_1.connection.connect((err) => {
    if (err) {
        throw err;
    }
    connection_1.connection.query(schema.CREATE_REGISTRATION_TABLE, (err, result) => {
        if (err) {
            throw err;
        }
        console.log('Registration Table Created');
    });
    connection_1.connection.query(schema.CREATE_AUTHENTICATION_TABLE, (err, result) => {
        if (err) {
            throw err;
        }
        console.log('Authentication Table Created');
    });
});
module.exports = connection_1.connection;
//# sourceMappingURL=schema-execution.js.map