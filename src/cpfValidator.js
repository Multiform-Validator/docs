// Feito por: Logan

function geraEValida() { // Função que executa todo código.
    const cpfStored = [];
    for (let generator = 0; generator < 11; generator++) { // Gera um número aleatório de 9 dígitos.
        const randomNumber0to9 = (Math.random() * 9).toFixed(0);
        cpfStored.push(randomNumber0to9);
    }
    const cpfStoredString = cpfStored.join(''); // cpfStoredString armazena o valor da lista cpfStored em forma de string
    let numberoBase = 10;
    let numberoBase2 = 11;
    let somaTotal = 0;
    let somaTotal2 = 0;
    for (let repetidor = 0; repetidor < 11; repetidor++) { // Executa os códigos 11 vezes em sequência.
        for (let contador of cpfStoredString[repetidor]) { // Faz a soma numérica de todos os números gerados por multiplicador.
            const multiplicador = contador * numberoBase;
            numberoBase--;
            somaTotal += multiplicador;
        }
        for (let contador2 of cpfStoredString[repetidor]) { // Faz a soma numérica de todos os números gerados por multiplicador2.
            const multiplicador2 = contador2 * numberoBase2;
            numberoBase2--;
            somaTotal2 += multiplicador2;
        }
        const valorDeVerificacao = somaTotal - cpfStoredString[9]; // Coleta a soma apenas até o 9° número da sequência
        const valorDeVerificacao2 = somaTotal2 - cpfStoredString[10]; // Coleta a soma apenas até o 10° número da sequência
        var primeiroVerificador = (11 - (valorDeVerificacao % 11)); // Calcula o Primeiro digito verificador
        var segundoVerificador = (11 - (valorDeVerificacao2 % 11)); // Calcula o Segundo Digito verificador
    }

    // Condições se o número verificador for maior que 9, então o valor dele tem que ser 0
    if (primeiroVerificador > 9) {
        primeiroVerificador = 0;
    }
    if (segundoVerificador > 9) {
        segundoVerificador = 0;
    }
    // Valida o Numero gerado, se = true, CPF GERADO.
    if (primeiroVerificador === Number(cpfStoredString[9]) && segundoVerificador === Number(cpfStoredString[10]) && cpfStoredString.charAt(0).repeat(11) !== cpfStoredString) {
        //console.log(`CPF VALIDO GERADO: ${cpfStoredString}`);
        return cpfStoredString;
    } else { // Se a condição for falsa, a função será executada automaticamente sozinha, até que um valor seja verdadeiro.
        return geraEValida();
    }
}

//console.log(geraEValida());

export default geraEValida();