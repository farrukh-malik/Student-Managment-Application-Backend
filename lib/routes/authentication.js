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
const router = express.Router();
module.exports = () => {
    const authenticationService = require('../services/authentication');
    // for insert authentication ->Write
    router.post('/user', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log('authenticationObject:', req.body);
            const authenticationObject = req.body;
            const responseOfAuthentication = yield authenticationService.createUser(authenticationObject);
            res.status(201).json({
                message: 'ok',
                responseOfAuthentication
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                err: error
            });
        }
    }));
    // for insert approve authentication by adding true to position field ->Write
    router.post('/user/:userId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log('userObject:', req.body);
            const approvedAuthenticationObject = req.body.authentication;
            const responseOfApprovedAuthentication = yield authenticationService.approveUser(approvedAuthenticationObject);
            res.status(201).json({
                message: 'ok',
                responseOfApprovedAuthentication
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({
                err: error
            });
        }
    }));
    // for get all authentication ->Read
    router.get('/user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // const authObj = req.body.auth;
            let result = yield authenticationService.getAllUser();
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
    // for delete single authentication ->delete
    router.delete('/user/:userId', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userId = req.params.userId;
            console.log("applicantId", userId);
            yield authenticationService.deleteUser(userId);
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
//# sourceMappingURL=authentication.js.map