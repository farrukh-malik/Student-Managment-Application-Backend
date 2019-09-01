import * as mysql from 'mysql';
import {databaseConnectionOption} from './config';

export class DatabaseCreationConnection{
    static connection = mysql.createConnection(
        databaseConnectionOption
    );
}
