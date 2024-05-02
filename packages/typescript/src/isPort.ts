/**
 * @example isPort('80'); // true
 * @example isPort(443); // true
 * @example isPort('65535'); // true
 * @example isPort(0); // false (port number must be greater than 0)
 * @example isPort('65536'); // false (port number must be less than or equal to 65535)
 * @example isPort('Hello'); // false (not a valid port number)
 * @description Values can be passed as a string or a number
 * @returns true or false
 */
function isPort(value: string | number): boolean {
	if (typeof value !== "string" && typeof value !== "number") {
		throw new TypeError("Input value must be a string or a number.");
	}
	// Converte o valor para um inteiro (se for uma string) e verifica se está dentro do intervalo de porta válido
	const portNumber: number = parseInt(String(value), 10);
	return Number.isInteger(portNumber) && portNumber >= 1 && portNumber <= 65535;
}
export default isPort;
