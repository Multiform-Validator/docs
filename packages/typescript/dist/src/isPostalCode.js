"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPostalCode(postalCode) {
    if (typeof postalCode !== 'string')
        throw new TypeError('Input value must be a string.');
    var usZipCodeRegex = /^\d{5}(-\d{4})?$/;
    var canadaPostalCodeRegex = /^[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d$/;
    var ukPostalCodeRegex = /^[A-Za-z]{1,2}\d[A-Za-z\d]?\s\d[A-Za-z]{2}$/;
    var francePostalCodeRegex = /^\d{5}$/;
    var netherlandsPostalCodeRegex = /^\d{4}$/;
    var japanPostalCodeRegex = /^\d{3}-\d{4}$/;
    var spainPostalCodeRegex = /^\d{5}$/;
    var southAfricaPostalCodeRegex = /^\d{4}$/;
    var germanyPostalCodeRegex = /^\d{5}$/;
    var switzerlandPostalCodeRegex = /^\d{4}$/;
    var brazilPostalCodeRegex = /^\d{5}-\d{3}$/;
    var italyPostalCodeRegex = /^\d{5}$/;
    var usZipCodeOnlyRegex = /^\d{5}$/;
    return (usZipCodeRegex.test(postalCode)
        || canadaPostalCodeRegex.test(postalCode)
        || ukPostalCodeRegex.test(postalCode)
        || francePostalCodeRegex.test(postalCode)
        || netherlandsPostalCodeRegex.test(postalCode)
        || japanPostalCodeRegex.test(postalCode)
        || spainPostalCodeRegex.test(postalCode)
        || southAfricaPostalCodeRegex.test(postalCode)
        || germanyPostalCodeRegex.test(postalCode)
        || switzerlandPostalCodeRegex.test(postalCode)
        || brazilPostalCodeRegex.test(postalCode)
        || italyPostalCodeRegex.test(postalCode)
        || usZipCodeOnlyRegex.test(postalCode));
}
exports.default = isPostalCode;
