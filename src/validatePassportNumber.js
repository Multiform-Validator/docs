"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example validatePassportNumber('A1234567');
 * @example validatePassportNumber('123456789');
 * @description Values have to be passed as a string
 * @returns return { isValid: boolean, country: string }
 */
function validatePassportNumber(passaportNumber) {
    var e_1, _a;
    // Verificar se o parâmetro é uma string
    if (typeof passaportNumber !== 'string') {
        throw new TypeError('The input should be a string.');
    }
    // Remover espaços em branco antes de realizar a validação
    var cleanedPassportNumber = passaportNumber.replace(/\s/g, '');
    // Mapear os formatos comuns de passaporte e seus respectivos países
    var passportFormats = [
        { country: 'United States', regex: /^[0-9]{9}$/ },
        { country: 'United Kingdom', regex: /^[A-Z]{2}[0-9]{6}$/ },
        { country: 'Germany', regex: /^[A-Z]{2}[0-9]{8}$/ },
        { country: 'Canada', regex: /^[A-Z][0-9]{7}$/ },
        { country: 'Australia', regex: /^[A-Z][0-9]{7}$/ },
        { country: 'Brazil', regex: /^[0-9]{9}$/ },
        { country: 'France', regex: /^[A-Z]{2}[0-9]{7}$/ },
        { country: 'Italy', regex: /^[A-Z][0-9]{7}$/ },
        { country: 'India', regex: /^[A-Z][0-9]{7}$/ },
        { country: 'China', regex: /^[A-Z][0-9]{8}$/ },
    ];
    try {
        // Verificar o formato do passaporte antes de verificar o país
        for (var passportFormats_1 = __values(passportFormats), passportFormats_1_1 = passportFormats_1.next(); !passportFormats_1_1.done; passportFormats_1_1 = passportFormats_1.next()) {
            var format = passportFormats_1_1.value;
            if (format.regex.test(cleanedPassportNumber)) {
                return { isValid: true, country: format.country };
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (passportFormats_1_1 && !passportFormats_1_1.done && (_a = passportFormats_1.return)) _a.call(passportFormats_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    // Caso o formato não seja válido, retornar { isValid: false, country: null }
    return { isValid: false, country: null };
}
exports.default = validatePassportNumber;
