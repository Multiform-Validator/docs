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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var CleanAfterDefaultDomain = ['.br', '.io', '.pt', '.us', '.org', '.com'];
function getOnlyEmail(text, multiple, cleanDomain, repeatEmail) {
    if (multiple === void 0) { multiple = false; }
    if (cleanDomain === void 0) { cleanDomain = false; }
    if (repeatEmail === void 0) { repeatEmail = false; }
    var emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;
    var matches = text.match(emailPattern);
    if (!matches)
        return 'No email found';
    if (cleanDomain) {
        var domainsToClean_1;
        if (Array.isArray(cleanDomain)) {
            domainsToClean_1 = cleanDomain;
        }
        else if (cleanDomain === true) {
            domainsToClean_1 = CleanAfterDefaultDomain;
        }
        else {
            domainsToClean_1 = [];
        }
        var cleanedEmails = matches.map(function (email) {
            var e_1, _a;
            try {
                for (var domainsToClean_2 = __values(domainsToClean_1), domainsToClean_2_1 = domainsToClean_2.next(); !domainsToClean_2_1.done; domainsToClean_2_1 = domainsToClean_2.next()) {
                    var domain = domainsToClean_2_1.value;
                    var index = email.lastIndexOf(domain);
                    if (index !== -1) {
                        return email.substring(0, index + domain.length);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (domainsToClean_2_1 && !domainsToClean_2_1.done && (_a = domainsToClean_2.return)) _a.call(domainsToClean_2);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return email;
        });
        if (!repeatEmail) {
            var uniqueEmails = __spreadArray([], __read(new Set(cleanedEmails)), false);
            return multiple ? uniqueEmails : uniqueEmails[0];
        }
        return multiple ? cleanedEmails : cleanedEmails[0];
    }
    if (!repeatEmail) {
        var uniqueEmails = __spreadArray([], __read(new Set(matches)), false);
        return multiple ? uniqueEmails : uniqueEmails[0];
    }
    return multiple ? matches : matches[0];
}
exports.default = getOnlyEmail;
