"use strict";
const defaultErrorMsg = [
    'CPF invalid',
    'CPF must have 11 numerical digits',
    'CPF is not valid',
    'Unknown error',
];
/**
 * @param {string} cpf
 * @param {string[]} [errorMsg=defaultErrorMsg] optional
 * @example cpfIsValid('123.456.789.10');
 * @example cpfIsValid('12345678910');
 * @example cpfIsValid('12345678910', ['CPF ta errado','Tem que ter pelo menos 11']);
 * @description This function returns four errors in the following order,
 *
 * If you want to use a default parameter, use null.
 *
 * Default:
 * ['CPF invalid', 'CPF must have 11 numerical digits', 'CPF is not valid', 'Unknown error']
 * .
 *
 * Create a list of errors separated by commas in strings
 * @returns {object} An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function cpfIsValid(cpf, errorMsg = defaultErrorMsg) {
    if (typeof cpf !== 'string')
        throw new TypeError('The input should be a string.');
    // Check para saber se as mensagens que sao passadas sao validas
    // caso contrario retorna um ERRO
    if (errorMsg) {
        if (!Array.isArray(errorMsg))
            throw new TypeError('Must be an Array');
        for (let index = 0; index < errorMsg.length; index += 1) {
            if (errorMsg[index] != null && typeof errorMsg[index] !== 'string') {
                throw new TypeError('All values within the array must be strings or null/undefined.');
            }
        }
    }
    // Função interna para obter a mensagem de erro
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
        let numeroBase = 10;
        let numeroBase2 = 11;
        let somaTotal = 0;
        let somaTotal2 = 0;
        if (cpf.length !== 11 && cpf.length !== 14) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(1),
            };
        }
        const cpfLimpo = cpf.replace(/\D+/g, ''); // Transforma o cpf em um valor limpo sem caracter especial
        // Validação para verificar se todos os dígitos são iguais (condição de CPF inválido).
        if (/^(\d)\1{10}$/.test(cpfLimpo)) {
            return {
                isValid: false,
                errorMsg: getErrorMessage(2),
            };
        }
        let primeiroVerificador = 0;
        let segundoVerificador = 0;
        for (let repetidor = 0; repetidor < 11; repetidor += 1) { // Executa os códigos 11 vezes em sequência.
            // Faz a soma numérica de todos os números gerados por multiplicador.
            const multiplicador = Number(cpfLimpo[repetidor]) * numeroBase;
            numeroBase -= 1;
            somaTotal += multiplicador;
            // Faz a soma numérica de todos os números gerados por multiplicador2.
            const multiplicador2 = Number(cpfLimpo[repetidor]) * numeroBase2;
            numeroBase2 -= 1;
            somaTotal2 += multiplicador2;
            // Calculo de verificação dos digitos
            const valorDeVerificacao = somaTotal - Number(cpfLimpo[9]); // Coleta a soma apenas até o 9° número da sequência
            const valorDeVerificacao2 = somaTotal2 - Number(cpfLimpo[10]); // Coleta a soma apenas até o 10° número da sequência
            primeiroVerificador = (11 - (valorDeVerificacao % 11)); // Calcula o Primeiro dígito verificador
            segundoVerificador = (11 - (valorDeVerificacao2 % 11)); // Calcula o Segundo Dígito verificador
        }
        if (primeiroVerificador > 9)
            primeiroVerificador = 0;
        if (segundoVerificador > 9)
            segundoVerificador = 0;
        // Valida o Número gerado, se = true, CPF GERADO.
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
module.exports = cpfIsValid;
