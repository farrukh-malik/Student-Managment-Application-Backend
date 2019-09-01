"use strict";
// import * as TABLES from '../models/table-names';
// import { Connection } from '../models/schema-execution';
Object.defineProperty(exports, "__esModule", { value: true });
const TABLES = require("../models/table-names");
const schema_execution_1 = require("../models/schema-execution");
class RegistrationService {
    // for insert registration ->Write
    createRegistration(applicant) {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO ${TABLES.REGISTRATION} (first_name, last_name, email, father_name, address, mobile_number, home_contact_number)
         VALUES ('${applicant.firstName}', '${applicant.lastName}', '${applicant.email}', '${applicant.fatherName}', '${applicant.address}', '${applicant.mobileNumber}', '${applicant.homeContactNumber}')`;
            new schema_execution_1.Connection().getConnection().query(query, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
    // (applicant) can pass for specific REGISTRATION get
    // for get all registration ->Read
    getAllRegistration() {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${TABLES.REGISTRATION}`;
            new schema_execution_1.Connection().getConnection().query(query, (err, result) => {
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
    // for delete single registration ->delete
    deleteApplicantRegistration(applicantId) {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM ${TABLES.REGISTRATION} WHERE id = ${applicantId}`;
            new schema_execution_1.Connection().getConnection().query(query, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
    // for delete all registration drop table ->delete
    deleteAllApplicantRegistration() {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM ${TABLES.REGISTRATION}`;
            new schema_execution_1.Connection().getConnection().query(query, (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
}
exports.RegistrationService = RegistrationService;
//# sourceMappingURL=registration.js.map