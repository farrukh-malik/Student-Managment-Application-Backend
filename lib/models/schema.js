"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TABLES = require("./table-names");
const CREATE_REGISTRATION_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.REGISTRATION}
                           (
                                id MEDIUMINT NOT NULL AUTO_INCREMENT,
                                first_name VARCHAR(40) NOT NULL,
                                last_name VARCHAR(40) NOT NULL,
                                email VARCHAR(100) NOT NULL UNIQUE,
                                father_name VARCHAR(40) NOT NULL,
                                address VARCHAR(40) NULL,
                                mobile_number VARCHAR(20) NOT NULL,
                                home_contact_number VARCHAR(20) NOT NULL,
                                PRIMARY KEY (id)
                           )`;
const CREATE_AUTHENTICATION_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLES.AUTHENTICATION}
                           (
                                id MEDIUMINT NOT NULL AUTO_INCREMENT,
                                name VARCHAR(40) NOT NULL,
                                email VARCHAR(100) NOT NULL UNIQUE,
                                password VARCHAR(40) NOT NULL,
                                position ENUM ('admin','teacher','student'),
                                PRIMARY KEY (id)
                           )`;
const schemas = {
    CREATE_REGISTRATION_TABLE,
    CREATE_AUTHENTICATION_TABLE
};
module.exports = schemas;
//# sourceMappingURL=schema.js.map