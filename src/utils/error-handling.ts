import { ErrorHandlingService } from "../shared/services/error-handling-service";
import { ErrorObject } from '../shared/interfaces/interface.shared';
import * as moment from 'moment';

export class ErrorHandler{
    connection: any;
    constructor(connection: any){
        this.connection = connection;
    }
    async errorHandler(err: any, req: any, res: any, next: any){
        console.log({err: JSON.stringify(err)});
        const errorObject: ErrorObject = {
            errorMessage: JSON.stringify(`status: ${err.status || 'not identified'} ${err.err.replace(/[^a-zA-Z ]/g, " ") || 'not indentified'}`),
            time: moment().utc().format('YYYY-MM-DD hh:mm:ss')
        }
        try{
            await this.connection.logErrorIntoDataBase(errorObject);
        }catch(error){
            console.log({error});
        }
        return res.status(err.status).send(err);
    }
}