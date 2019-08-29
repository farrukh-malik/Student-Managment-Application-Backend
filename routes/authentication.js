const express = require('express');
const router = express.Router();


module.exports = ()=>{
    const authenticationService = require('../services/authentication');

 // for insert authentication ->Write
 router.post('/authentication', async (req, res, next)=>{
    try {
        console.log('authenticationObject:', req.body)
        const authenticationObject = req.body.authentication;

        const responseOfAuthentication = await authenticationService.createAuthentication(authenticationObject);
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








return router;
}