const connection = require('../models/schema-execution');
import * as TABLES from '../models/table-names';

// for insert registration ->Write
function createRegistration(applicant: any){
    return new Promise((resolve, reject)=>{
        const query = `INSERT INTO ${TABLES.REGISTRATION} (first_name, last_name, email, father_name, address, mobile_number, home_contact_number)
         VALUES ('${applicant.firstName}', '${applicant.lastName}', '${applicant.email}', '${applicant.fatherName}', '${applicant.address}', '${applicant.mobileNumber}', '${applicant.homeContactNumber}')`;
        connection.query(query, (err: any, result: any)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}
// (applicant) can pass for specific REGISTRATION get

// for get all registration ->Read
function getAllRegistration(){
    return new Promise ((resolve, reject)=>{
        const query = `SELECT * FROM ${TABLES.REGISTRATION}`;
        
        connection.query(query, (err: any, result: any)=>{
            if(err){
                reject(err);
            }
            if(!result.length){
                reject('length 0');
            }
            resolve(result);
            });
    });
}

// for delete single registration ->delete
function deleteApplicantRegistration(applicantId: any){
    return new Promise((resolve, reject)=>{
        const query = `DELETE FROM ${TABLES.REGISTRATION} WHERE id = ${applicantId}`;
        connection.query(query, (err: any, result: any)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}

// for delete all registration drop table ->delete
function deleteAllApplicantRegistration(){
    return new Promise((resolve, reject)=>{
        const query = `DELETE FROM ${TABLES.REGISTRATION}`;
        connection.query(query, (err: any, result: any)=>{
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}


module.exports = {
    createRegistration,
    getAllRegistration,
    deleteApplicantRegistration,
    deleteAllApplicantRegistration
}