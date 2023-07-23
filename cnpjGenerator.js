// Feito por: Logan

// Função para gerar um dígito aleatório entre 0 e 9
function randomDigit() {
    return Math.floor(Math.random() * 10);
  }
  
// Função para gerar os 12 primeiros dígitos do CNPJ
function generateCNPJBase() {
  const cnpjBase = [];
  for (let i = 0; i < 12; i++) {
    cnpjBase.push(randomDigit());
  }
  return cnpjBase;
}

// Função para calcular o primeiro dígito verificador
function calculateFirstVerifier(cnpjBase) {
  const weight = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += cnpjBase[i] * weight[i];
  }
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

// Função para calcular o segundo dígito verificador
function calculateSecondVerifier(cnpjBase, firstVerifier) {
  const weight = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += cnpjBase[i] * weight[i];
  }
  sum += firstVerifier * weight[12];
  const remainder = sum % 11;
  return remainder < 2 ? 0 : 11 - remainder;
}

// Função para gerar um CNPJ válido
function generateValidCNPJ() {
  const cnpjBase = generateCNPJBase();
  const firstVerifier = calculateFirstVerifier(cnpjBase);
  const secondVerifier = calculateSecondVerifier(cnpjBase.concat(firstVerifier), firstVerifier);
  return `${cnpjBase.join('')}${firstVerifier}${secondVerifier}`;
}

// Exemplo de uso
//const cnpj = generateValidCNPJ();
//console.log(cnpj);

module.exports = generateValidCNPJ();