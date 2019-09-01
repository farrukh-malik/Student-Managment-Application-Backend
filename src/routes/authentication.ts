import * as express from 'express';
import { IUser } from '../shared/interfaces/user';
const router = express.Router();


module.exports = ()=>{
    const authenticationService = require('../services/authentication');
    
 // for insert authentication ->Write
 router.post('/user', async (req: express.Request, res: express.Response, next: express.NextFunction)=>{
    try {
        console.log('authenticationObject:', req.body)
        const authenticationObject: IUser = req.body;

        const responseOfAuthentication = await authenticationService.createUser(authenticationObject);
        res.status(201).json({
            message: 'ok',
            responseOfAuthentication
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            err: error
        });
    }
});

// for insert approve authentication by adding true to position field ->Write
router.post('/user/:userId', async (req, res, next)=>{
    try {
        console.log('userObject:', req.body)
        const approvedAuthenticationObject = req.body.authentication;

        const responseOfApprovedAuthentication = await authenticationService.approveUser(approvedAuthenticationObject);
        res.status(201).json({
            message: 'ok',
            responseOfApprovedAuthentication
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            err: error
        });
    }
});



 // for get all authentication ->Read
 router.get('/user', async(req, res)=>{
    try{
        // const authObj = req.body.auth;
       let result = await authenticationService.getAllUser();
         res.status(200).json({
             res: "success",
             result
         })
     }catch(error){
         res.status(401).json({
             err: error
         });
     }
 });

// for delete single authentication ->delete
router.delete('/user/:userId', async (req, res, next)=>{
    try {
        const userId = req.params.userId;
        console.log("applicantId",userId)
        await authenticationService.deleteUser(userId);
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



return router;
}