"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultErrorMsg = [
    'CPF invalid',
    'CPF must have 11 numerical digits',
    'CPF is not valid',
    'Unknown error',
];
function cpfIsValid(cpf, errorMsg) {
    if (errorMsg === void 0) { errorMsg = defaultErrorMsg; }
    if (typeof cpf !== 'string')
        throw new TypeError('The input should be a string.');
    if (errorMsg) {
        if (!Array.isArray(errorMsg))
            throw new TypeError('Must be an Array');
        for (var index = 0; index < errorMsg.length; index += 1) {
            if (errorMsg[index] != null && typeof errorMsg[index] !== 'string') {
                throw new TypeError('All values within the array must be strings or null/undefined.');
            }
        }
    }
    function getErrorMessage(index) {
        if (errorMsg && index >= 0 && index < errorMsg.length && errorMsg[index] != null) {
            return errorMsg[index];
        }
        return defaultErrorMsg[index];
    }
    try {
        if (!cpf) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(0),
            };
        }
        var numeroBase = 10;
        var numeroBase2 = 11;
        var somaTotal = 0;
        var somaTotal2 = 0;
        if (cpf.length !== 11 && cpf.length !== 14) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(1),
            };
        }
        var cpfLimpo = cpf.replace(/\D+/g, '');
        if (/^(\d)\1{10}$/.test(cpfLimpo)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(2),
            };
        }
        var primeiroVerificador = 0;
        var segundoVerificador = 0;
        for (var repetidor = 0; repetidor < 11; repetidor += 1) {
            var multiplicador = Number(cpfLimpo[repetidor]) * numeroBase;
            numeroBase -= 1;
            somaTotal += multiplicador;
            var multiplicador2 = Number(cpfLimpo[repetidor]) * numeroBase2;
            numeroBase2 -= 1;
            somaTotal2 += multiplicador2;
            var valorDeVerificacao = somaTotal - Number(cpfLimpo[9]);
            var valorDeVerificacao2 = somaTotal2 - Number(cpfLimpo[10]);
            primeiroVerificador = (11 - (valorDeVerificacao % 11));
            segundoVerificador = (11 - (valorDeVerificacao2 % 11));
        }
        if (primeiroVerificador > 9)
            primeiroVerificador = 0;
        if (segundoVerificador > 9)
            segundoVerificador = 0;
        if (primeiroVerificador === Number(cpfLimpo[9])
            && segundoVerificador === Number(cpfLimpo[10])) {
            return {
                isValid: true,
                errorMsg: null,
            };
        }
        return {
            isValid: false,
            errorMsg: getErrorMessage(2),
        };
    }
    catch (err) {
        return {
            isValid: false,
            errorMsg: getErrorMessage(3),
        };
    }
}
exports.default = cpfIsValid;
