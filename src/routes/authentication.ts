import * as express from 'express';
import { IUser } from '../shared/interfaces/user';
import {UserService} from '../services/authentication';

export class User {
    router: express.Router;
    userService: any;
    constructor(connection: any) {
        this.router = express.Router();
        this.userService = new UserService(connection);
        this.createUser();
        this.approveUser();
        this.getAllUser();
        this.deleteUser();
    }

    createUser() {
        this.router.post('/user', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                console.log('authenticationObject:', req.body)
                const authenticationObject: IUser = req.body;

                const responseOfAuthentication = await this.userService.createUser(authenticationObject);
                res.status(201).json({
                    message: 'ok',
                    responseOfAuthentication
                });
            } catch (error) {
                next({
                    status: 500,
                    err: JSON.stringify(error)
                });
            }
        });
    }

    approveUser() {
       this.router.post('/user/:userId', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                console.log('userObject:', req.body)
                const approvedAuthenticationObject = req.body.authentication;

                const responseOfApprovedAuthentication = await this.userService.approveUser(approvedAuthenticationObject);
                res.status(201).json({
                    message: 'ok',
                    responseOfApprovedAuthentication
                });
            } catch (error) {
                next({
                    status: 500,
                    err: JSON.stringify(error)
                });
            }
        });
    }

    getAllUser() {
        this.router.get('/user', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                // const authObj = req.body.auth;
                let result = await this.userService.getAllUser();
                res.status(200).json({
                    res: "success",
                    result
                })
            } catch (error) {
                next({
                    status: 500,
                    err: JSON.stringify(error)
                });
            }
        });


    }

    deleteUser() {
        this.router.delete('/user/:userId', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                const userId = req.params.userId;
                console.log("applicantId", userId)
                await this.userService.deleteUser(userId);
                res.status(201).json({
                    message: 'ok'
                });
            } catch (error) {
                next({
                    status: 500,
                    err: JSON.stringify(error)
                });
            }
        });

    }

    getRoute(){
        return this.router;
    }
}
