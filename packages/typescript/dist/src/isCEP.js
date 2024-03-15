"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isCEP(cep) {
    if (typeof cep !== 'string') {
        throw new TypeError('Input value must be a string.');
    }
    try {
        if (cep.length < 8 || cep.length > 10)
            return false;
        var cepString = cep.replace(/\D/g, '');
        if (cepString.length !== 8)
            return false;
        if (Number.isNaN(cepString))
            return false;
        return true;
    }
    catch (error) {
        return false;
    }
}
exports.default = isCEP;
