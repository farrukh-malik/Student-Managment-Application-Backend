const mysql = require('mysql');
const databaseConnectionOption = require('./config');

export const connection = mysql.createConnection(
    databaseConnectionOption
);
