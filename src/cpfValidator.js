function cpfIsValid(cpf) {
    if (!cpf) return false;
    let numeroBase = 10;
    let numeroBase2 = 11;
    let somaTotal = 0;
    let somaTotal2 = 0;
    const cpfLimpo = cpf.toString().replace(/\D+/g, ''); // Transforma o cpf em um valor limpo sem caracter especial
    if (cpfLimpo.length !== 11) {
      return false;
    }
    for (let repetidor = 0; repetidor < 11; repetidor++) { // Executa os códigos 11 vezes em sequência.
      for (let contador of cpfLimpo[repetidor]) { // Faz a soma numérica de todos os números gerados por multiplicador.
        const multiplicador = contador * numeroBase;
        numeroBase--;
        somaTotal += multiplicador;
      }
      for (let contador2 of cpfLimpo[repetidor]) { // Faz a soma numérica de todos os números gerados por multiplicador2.
        const multiplicador2 = contador2 * numeroBase2;
        numeroBase2--;
        somaTotal2 += multiplicador2;
      }
      const valorDeVerificacao = somaTotal - cpfLimpo[9]; // Coleta a soma apenas até o 9° número da sequência
      const valorDeVerificacao2 = somaTotal2 - cpfLimpo[10]; // Coleta a soma apenas até o 10° número da sequência
      var primeiroVerificador = (11 - (valorDeVerificacao % 11)); // Calcula o Primeiro dígito verificador
      var segundoVerificador = (11 - (valorDeVerificacao2 % 11)); // Calcula o Segundo Dígito verificador
    }
    if (primeiroVerificador > 9) {
      primeiroVerificador = 0;
    }
    if (segundoVerificador > 9) {
      segundoVerificador = 0;
    }
    // Valida o Número gerado, se = true, CPF GERADO.
    if (primeiroVerificador === Number(cpfLimpo[9]) && segundoVerificador === Number(cpfLimpo[10]) && cpfLimpo.charAt(0).repeat(11) !== cpfLimpo) {
      return true;
    } else {
      return false;
    }
  }
  module.exports = cpfIsValid;