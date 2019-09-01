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
const error_handling_service_1 = require("../shared/services/error-handling-service");
const moment = require("moment");
class ErrorHandler {
    constructor() { }
    errorHandler(err, req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log({ err: JSON.stringify(err) });
            const errorObject = {
                errorMessage: JSON.stringify(`status: ${err.status || 'not identified'} ${err.err.replace(/[^a-zA-Z ]/g, " ") || 'not indentified'}`),
                time: moment().utc().format('YYYY-MM-DD hh:mm:ss')
            };
            try {
                yield new error_handling_service_1.ErrorHandlingService().logErrorIntoDataBase(errorObject);
            }
            catch (error) {
                console.log({ error });
            }
            return res.status(err.status).send(err);
        });
    }
}
exports.ErrorHandler = ErrorHandler;
//# sourceMappingURL=error-handling.js.map