
import * as TABLES from '../models/table-names';
import { IRegistration } from '../shared/interfaces/registration';


export class RegistrationService {
    connection: any;
    constructor(connection: any) {
        this.connection = connection;
    }

    createRegistration(applicant: IRegistration): Promise<any> {
        return new Promise((resolve, reject) => {
            const query = `INSERT INTO ${TABLES.REGISTRATION} (first_name, last_name, email, father_name, address, mobile_number, home_contact_number)
            VALUES ('${applicant.firstName}', '${applicant.lastName}', '${applicant.email}', '${applicant.fatherName}', '${applicant.address}', '${applicant.mobileNumber}', '${applicant.homeContactNumber}')`;
            this.connection.getConnection().query(query, (err: any, result: any) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
    getAllRegistration(): Promise<any> {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM ${TABLES.REGISTRATION}`;

            this.connection.getConnection().query(query, (err: any, result: any) => {
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

    deleteApplicantRegistration(applicantId: any): Promise<any> {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM ${TABLES.REGISTRATION} WHERE id = ${applicantId}`;
            this.connection.getConnection().query(query, (err: any, result: any) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }

    deleteAllApplicantRegistration(): Promise<any> {
        return new Promise((resolve, reject) => {
            const query = `DELETE FROM ${TABLES.REGISTRATION}`;
            this.connection.getConnection().query(query, (err: any, result: any) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            });
        });
    }
}