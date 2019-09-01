import {DatabaseCreationConnection} from './connection';
import {schema} from './schema';

export class Connection{
    constructor(){
        this.createConnection();
    }

    createConnection(){
        
            DatabaseCreationConnection.connection.query(schema.CREATE_REGISTRATION_TABLE, (err: any, result: any)=>{
                if(err){
                    throw err;
                }
                console.log('Registration Table Created');
            });
        
            DatabaseCreationConnection.connection.query(schema.CREATE_AUTHENTICATION_TABLE, (err: any, result: any)=>{
                if(err){
                    throw err;
                }
                console.log('Authentication Table Created');
            });

            DatabaseCreationConnection.connection.query(schema.ERROR_LOG_STRUCTURE, (err: any, result: any)=>{
                if(err){
                    throw err;
                }
                console.log('ERROR_LOG_STRUCTURE Table Created');
            });
    }

    getConnection(){
        return DatabaseCreationConnection.connection;
    }
}