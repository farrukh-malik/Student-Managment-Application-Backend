import * as express from 'express';
import { IRegistration } from '../shared/interfaces/registration';
import { RegistrationService } from '../services/registration';


export class Registration {
    router: express.Router;
    registrationService: any;
    constructor(connection: any) {
        this.router = express.Router();
        this.registrationService = new RegistrationService(connection);
        this.registrationUser();
        this.getAllUserRegistration();
        this.deleteUserRegistration();
        this.deleteAllUserRegistration();
    }


    registrationUser() {
        // for insert registration ->Write
        this.router.post('/registration', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
            try {
                console.log('registrationObject:', req.body)
                const registrationObject: IRegistration = req.body;

                const responseOfRegistration = await this.registrationService.createRegistration(registrationObject);
                res.status(201).json({
                    message: 'ok',
                    responseOfRegistration
                });
            } catch (error) {
                console.log(error);
                res.status(500).json({
                    err: error
                });
            }
        });

    }


    getAllUserRegistration() {
        // for get all registration ->Read
        this.router.get('/registration', async (req, res) => {
            try {
                // const authObj = req.body.auth;
                let result = await this.registrationService.getAllRegistration();
                res.status(200).json({
                    res: "success",
                    result
                })
            } catch (error) {
                res.status(401).json({
                    err: error
                });
            }
        });
    }

    deleteUserRegistration() {
        // for delete single registration ->delete
        this.router.delete('/registration/:applicantId', async (req: express.Request, res: express.Response, next: express.NextFunction) => {

            try {
                const applicantId = req.params.applicantId;
                console.log("applicantId", applicantId)
                await this.registrationService.deleteApplicantRegistration(applicantId);
                res.status(201).json({
                    message: 'ok'
                });
            } catch (error) {
                console.log(error);
                res.status(500).json({
                    err: error
                });
            }
        });
    }

    deleteAllUserRegistration() {
        // for delete all registration drop table ->delete
        this.router.delete('/registration', async (req: express.Request, res: express.Response, next: express.NextFunction) => {

            try {
                // const applicantId = req.params.applicantId;
                // console.log("applicantId",applicantId)
                await this.registrationService.deleteAllApplicantRegistration();
                res.status(201).json({
                    message: 'ok'
                });
            } catch (error) {
                console.log(error);
                res.status(500).json({
                    err: error
                });
            }
        });
    }

    getRoute() {
        return this.router;
    }

}