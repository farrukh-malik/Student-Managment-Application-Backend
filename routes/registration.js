const express = require('express');
const router = express.Router();

module.exports = ()=>{
    const registrationService = require('../services/registration');

    // for insert registration ->Write
    router.post('/registration', async (req, res, next)=>{
        try {
            console.log('registrationObject:', req.body)
            const registrationObject = req.body.registration;

            const responseOfRegistration = await registrationService.createRegistration(registrationObject);
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

    // for get all registration ->Read
    router.get('/registration', async(req, res)=>{
        try{
            // const authObj = req.body.auth;
           let result = await registrationService.getAllRegistration();
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

// for delete single registration ->delete
     router.delete('/registration/:applicantId', async (req, res, next)=>{
        try {
            const applicantId = req.params.applicantId;
            console.log("applicantId",applicantId)
            await registrationService.deleteApplicantRegistration(applicantId);
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

// for delete all registration drop table ->delete

    router.delete('/registration', async (req, res, next)=>{
        try {
            // const applicantId = req.params.applicantId;
            // console.log("applicantId",applicantId)
            await registrationService.deleteAllApplicantRegistration();
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