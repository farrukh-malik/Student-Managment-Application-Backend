import * as TABLES from '../../models/table-names';
import { ErrorObject } from '../interfaces/interface.shared';

export class ErrorHandlingService{
    connection: any;
    constructor(connection: any){
        this.connection = connection;
    }
    logErrorIntoDataBase(errorObject: ErrorObject): Promise<any>{
        return new Promise((resolve, reject)=>{
            const query = `INSERT INTO ${TABLES.ERROR_LOGING} (error, time)
             VALUES ('${errorObject.errorMessage}', '${errorObject.time}')`;
             this.connection.getConnection().query(query, (err: any, result: any)=>{
                if(err){
                    reject(err);
                }
                resolve(result);
            });
        });
    }
}