/**
 * @param {string} cpf
 * @example cpfIsValid('123.456.789.10');
 * @example cpfIsValid('12345678910');
 * @returns {boolean}
 */
function cpfIsValid(cpf) {
  try {
    if (!cpf) return false;
    let numeroBase = 10;
    let numeroBase2 = 11;
    let somaTotal = 0;
    let somaTotal2 = 0;
    const cpfLimpo = cpf.toString().replace(/\D+/g, ''); // Transforma o cpf em um valor limpo sem caracter especial
    if (cpfLimpo.length !== 11) return false;
    // Validação para verificar se todos os dígitos são iguais (condição de CPF inválido).
    if (/^(\d)\1{10}$/.test(cpfLimpo)) return false;
    let primeiroVerificador = 0;
    let segundoVerificador = 0;
    for (let repetidor = 0; repetidor < 11; repetidor += 1) { // Executa os códigos 11 vezes em sequência.
      // Faz a soma numérica de todos os números gerados por multiplicador.
      const multiplicador = cpfLimpo[repetidor] * numeroBase;
      numeroBase -= 1;
      somaTotal += multiplicador;
      // Faz a soma numérica de todos os números gerados por multiplicador2.
      const multiplicador2 = cpfLimpo[repetidor] * numeroBase2;
      numeroBase2 -= 1;
      somaTotal2 += multiplicador2;
      // Calculo de verificação dos digitos
      const valorDeVerificacao = somaTotal - cpfLimpo[9]; // Coleta a soma apenas até o 9° número da sequência
      const valorDeVerificacao2 = somaTotal2 - cpfLimpo[10]; // Coleta a soma apenas até o 10° número da sequência
      primeiroVerificador = (11 - (valorDeVerificacao % 11)); // Calcula o Primeiro dígito verificador
      segundoVerificador = (11 - (valorDeVerificacao2 % 11)); // Calcula o Segundo Dígito verificador
    }
    if (primeiroVerificador > 9) primeiroVerificador = 0;
    if (segundoVerificador > 9) segundoVerificador = 0;
    // Valida o Número gerado, se = true, CPF GERADO.
    if (primeiroVerificador === Number(cpfLimpo[9])
        && segundoVerificador === Number(cpfLimpo[10])) {
      return true;
    }
    return false;
  } catch (err) {
    return false;
  }
}
module.exports = cpfIsValid;
