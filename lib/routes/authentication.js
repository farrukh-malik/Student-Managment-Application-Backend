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
const authentication_1 = require("../services/authentication");
class User {
    constructor(connection) {
        this.router = express.Router();
        this.userService = new authentication_1.UserService();
        this.connection = connection;
        this.createUser();
        this.approveUser();
        this.getAllUser();
        this.deleteUser();
    }
    createUser() {
        this.router.post('/user', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('authenticationObject:', req.body);
                const authenticationObject = req.body;
                const responseOfAuthentication = yield this.userService.createUser(authenticationObject);
                res.status(201).json({
                    message: 'ok',
                    responseOfAuthentication
                });
            }
            catch (error) {
                next({
                    status: 500,
                    err: JSON.stringify(error)
                });
            }
        }));
    }
    approveUser() {
        this.router.post('/user/:userId', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('userObject:', req.body);
                const approvedAuthenticationObject = req.body.authentication;
                const responseOfApprovedAuthentication = yield this.userService.approveUser(approvedAuthenticationObject);
                res.status(201).json({
                    message: 'ok',
                    responseOfApprovedAuthentication
                });
            }
            catch (error) {
                next({
                    status: 500,
                    err: JSON.stringify(error)
                });
            }
        }));
    }
    getAllUser() {
        this.router.get('/user', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                // const authObj = req.body.auth;
                let result = yield this.userService.getAllUser();
                res.status(200).json({
                    res: "success",
                    result
                });
            }
            catch (error) {
                next({
                    status: 500,
                    err: JSON.stringify(error)
                });
            }
        }));
    }
    deleteUser() {
        this.router.delete('/user/:userId', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = req.params.userId;
                console.log("applicantId", userId);
                yield this.userService.deleteUser(userId);
                res.status(201).json({
                    message: 'ok'
                });
            }
            catch (error) {
                next({
                    status: 500,
                    err: JSON.stringify(error)
                });
            }
        }));
    }
    getRoute() {
        return this.router;
    }
}
exports.User = User;
//# sourceMappingURL=authentication.js.map