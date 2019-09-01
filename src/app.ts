import * as express from 'express';
import { User } from './routes/authentication';
import { Registration } from './routes/registration';
import { ErrorHandler } from './utils/error-handling';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import {Connection} from './models/schema-execution';

const app = express();
const connection = new Connection();
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/api', new User(connection).getRoute());
app.use('/api', new Registration(connection).getRoute()); 
app.use(new ErrorHandler(connection).errorHandler);

app.listen(3000, ()=>{
    console.log('app listining on port 3000');
});