"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const router = express.Router();
module.exports = () => {
    const registrationService = require('../services/registration');
    // for insert registration ->Write
    router.post('/registration', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log('registrationObject:', req.body);
            const registrationObject = req.body.registration;
            const responseOfRegistration = yield registrationService.createRegistration(registrationObject);
            res.status(201).json({
                message: 'ok',
                responseOfRegistration
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                err: error
            });
        }
    }));
    // for get all registration ->Read
    router.get('/registration', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // const authObj = req.body.auth;
            let result = yield registrationService.getAllRegistration();
            res.status(200).json({
                res: "success",
                result
            });
        }
        catch (error) {
            res.status(401).json({
                err: error
            });
        }
    }));
    // for delete single registration ->delete
    router.delete('/registration/:applicantId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const applicantId = req.params.applicantId;
            console.log("applicantId", applicantId);
            yield registrationService.deleteApplicantRegistration(applicantId);
            res.status(201).json({
                message: 'ok'
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                err: error
            });
        }
    }));
    // for delete all registration drop table ->delete
    router.delete('/registration', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // const applicantId = req.params.applicantId;
            // console.log("applicantId",applicantId)
            yield registrationService.deleteAllApplicantRegistration();
            res.status(201).json({
                message: 'ok'
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                err: error
            });
        }
    }));
    return router;
};
//# sourceMappingURL=registration.js.map