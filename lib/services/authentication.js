"use strict";
// const connection = require('../models/schema-execution');
Object.defineProperty(exports, "__esModule", { value: true });
const TABLES = require("../models/table-names");
class UserService {
    createUser(user) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO ${TABLES.AUTHENTICATION} (name, email, password, position)
             VALUES ('${user.name}', '${user.email}', '${user.password}', '${user.position}')`;
            this.connection.getConnection().query(query, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
    approveUser(user) {
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
    getAllUser() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${TABLES.AUTHENTICATION}`;
            this.connection.getConnection().query(query, (err, result) => {
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
    deleteUser(userId) {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM ${TABLES.AUTHENTICATION} WHERE id = ${userId}`;
            this.connection.getConnection().query(query, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=authentication.js.map