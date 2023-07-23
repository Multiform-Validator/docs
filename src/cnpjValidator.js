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
// Função para validar o CNPJ
function cnpjIsValid(cnpj) {
  if(!cnpj) return false
  // Remove any non-digit characters from the CNPJ string
  const cnpjClean = cnpj.toString().replace(/\D/g, '');
  // Check if the CNPJ has 14 digits
  if (cnpjClean.length !== 14) {
    return false;
  }
  // Convert the CNPJ string to an array of digits
  const cnpjArray = cnpjClean.split('').map(Number);
  // Calculate the first and second verifiers
  const firstVerifier = calculateFirstVerifier(cnpjArray.slice(0, 12));
  const secondVerifier = calculateSecondVerifier(cnpjArray.slice(0, 12).concat(firstVerifier), firstVerifier);
  // Check if the calculated verifiers match the ones in the CNPJ
  if (cnpjArray[12] === firstVerifier && cnpjArray[13] === secondVerifier) {
    return true;
  }
  return false;
}
module.exports = cnpjIsValid;