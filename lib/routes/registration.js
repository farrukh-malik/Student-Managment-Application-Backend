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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const registration_1 = require("../services/registration");
class Registration {
    constructor() {
        this.router = express.Router();
        this.registrationService = new registration_1.RegistrationService();
        this.registrationUser();
        this.getAllUserRegistration();
        this.deleteUserRegistration();
        this.deleteAllUserRegistration();
    }
    registrationUser() {
        // for insert registration ->Write
        this.router.post('/registration', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('registrationObject:', req.body);
                const registrationObject = req.body.registration;
                const responseOfRegistration = yield this.registrationService.createRegistration(registrationObject);
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
    }
    getAllUserRegistration() {
        // for get all registration ->Read
        this.router.get('/registration', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                // const authObj = req.body.auth;
                let result = yield this.registrationService.getAllRegistration();
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
    }
    deleteUserRegistration() {
        // for delete single registration ->delete
        this.router.delete('/registration/:applicantId', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const applicantId = req.params.applicantId;
                console.log("applicantId", applicantId);
                yield this.registrationService.deleteApplicantRegistration(applicantId);
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
    }
    deleteAllUserRegistration() {
        // for delete all registration drop table ->delete
        this.router.delete('/registration', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                // const applicantId = req.params.applicantId;
                // console.log("applicantId",applicantId)
                yield this.registrationService.deleteAllApplicantRegistration();
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
    }
    getRoute() {
        return this.router;
    }
}
exports.Registration = Registration;
//# sourceMappingURL=registration.js.map