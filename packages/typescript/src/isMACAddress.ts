/**
 * @example isMACAddress('001A2B3C4D5E');
 * @example isMACAddress('00:1A:2B:3C:4D:5E');
 * @example isMACAddress('00-1A-2B-3C-4D-5E');
 * @description Values have to be passed as a string
 * @returns return true or false
 */
function isMACAddress(mac: string): boolean {
	// Verificar se o parâmetro é uma string
	if (typeof mac !== 'string') {
		throw new TypeError('The input should be a string.');
	}

	// Remover todos os caracteres não alfanuméricos
	const cleanedMac: string = mac.replace(/[^0-9A-Fa-f]/g, '');

	// Verificar se o comprimento é válido (12 caracteres)
	if (cleanedMac.length !== 12) {
		return false;
	}

	// Expressão regular para verificar o padrão de endereço MAC
	const macPattern: RegExp = /^([0-9A-Fa-f]{2}){6}$/;

	// Verificar se o endereço MAC corresponde ao padrão
	return macPattern.test(cleanedMac);
}

export default isMACAddress;
