// const connection = require('../models/schema-execution');

import * as TABLES from '../models/table-names';
import { IUser } from '../shared/interfaces/user';

export class UserService{
    connection: any;
    constructor(connection: any){
        this.connection = connection;
    }

    createUser(user: IUser): Promise<any>{
        return new Promise((resolve, reject)=>{
            const query = `INSERT INTO ${TABLES.AUTHENTICATION} (name, email, password, position)
             VALUES ('${user.name}', '${user.email}', '${user.password}', '${user.position}')`;
             this.connection.getConnection().query(query, (err: any, result: any)=>{
                if(err){
                    reject(err);
                }
                resolve(result);
            });
        });
    }
    
    
    approveUser(user: any): Promise<any>{
        return new Promise((resolve, reject)=>{
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
    
    getAllUser(): Promise<any>{
        return new Promise ((resolve, reject)=>{
            const query = `SELECT * FROM ${TABLES.AUTHENTICATION}`;
            
            this.connection.getConnection().query(query, (err: any, result: any)=>{
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
    
    
    deleteUser(userId: any): Promise<any>{
        return new Promise((resolve, reject)=>{
            const query = `DELETE FROM ${TABLES.AUTHENTICATION} WHERE id = ${userId}`;
            this.connection.getConnection().query(query, (err: any, result: any)=>{
                if(err){
                    reject(err);
                }
                resolve(result);
            });
        });
    }
}
