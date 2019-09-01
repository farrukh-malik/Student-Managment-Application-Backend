"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection = require('../models/schema-execution');
const TABLES = require("../models/table-names");
// for insert AUTHENTICATION ->Write
function createUser(user) {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ${TABLES.AUTHENTICATION} (name, email, password, position)
         VALUES ('${user.name}', '${user.email}', '${user.password}', '${user.position}')`;
        connection.query(query, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}
// for insert approve authentication by adding true to position field  ->Write
function approveUser(user) {
    return new Promise((resolve, reject) => {
        // const query = `UPDATE ${TABLES.AUTHENTICATION} SET (position) = ('${user.position}')` id = ${applicantId}`;
        // const query = '';
        // connection.query(query, (err: any, result: any)=>{
        //     if(err){
        //         reject(err);
        //     }
        //     resolve(result);
        // });
    });
}
// for get all authentication ->Read
function getAllUser() {
    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM ${TABLES.AUTHENTICATION}`;
        connection.query(query, (err, result) => {
            if (err) {
                reject(err);
            }
            if (!result.length) {
                reject('length 0');
            }
            resolve(result);
        });
    });
}
// for delete single authentication rejected user ->delete
function deleteUser(userId) {
    return new Promise((resolve, reject) => {
        const query = `DELETE FROM ${TABLES.AUTHENTICATION} WHERE id = ${userId}`;
        connection.query(query, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    });
}
module.exports = {
    createUser,
    approveUser,
    getAllUser,
    deleteUser
};
//# sourceMappingURL=authentication.js.map