/**
 * @param {string} passaportNumber
 * @example validatePassportNumber('A1234567');
 * @example validatePassportNumber('123456789');
 * @description Values have to be passed as a string
 * @returns {object} return { isValid: boolean, country: string }
 */
function validatePassportNumber(passaportNumber: string) {
  // Verificar se o parâmetro é uma string
  if (typeof passaportNumber !== 'string') {
    throw new TypeError('The input should be a string.');
  }
  // Remover espaços em branco antes de realizar a validação
  const cleanedPassportNumber = passaportNumber.replace(/\s/g, '');
  // Mapear os formatos comuns de passaporte e seus respectivos países
  const passportFormats = [
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
  // Verificar o formato do passaporte antes de verificar o país
  for (const format of passportFormats) {
    if (format.regex.test(cleanedPassportNumber)) {
      return { isValid: true, country: format.country };
    }
  }
  // Caso o formato não seja válido, retornar { isValid: false, country: null }
  return { isValid: false, country: null };
}

export = validatePassportNumber;
