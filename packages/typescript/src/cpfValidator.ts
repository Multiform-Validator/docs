const defaultErrorMsg: string[] = [
	"CPF invalid",
	"CPF must have 11 numerical digits",
	"CPF is not valid",
	"Unknown error",
];

/**
 * Validates a Brazilian CPF number for correctness.
 *
 * The CPF (Cadastro de Pessoas Físicas) is a Brazilian tax identification number.
 * It consists of 11 digits in the format XXX.XXX.XXX-XX. This function checks the
 * validity of a CPF number using its calculation algorithm.
 *
 * @param cpf The CPF number as a string.
 * @param errorMsg An optional array of custom error messages.
 * @example cpfIsValid('123.456.789-09');
 * @example cpfIsValid('12345678909');
 * @example cpfIsValid('12345678909', ['Custom invalid CPF message','Custom length error']);
 * @returns An object with 'isValid' (boolean) and 'errorMsg' (string) properties.
 */
function cpfIsValid(
	cpf: string,
	errorMsg: (string | null)[] | null = defaultErrorMsg,
): {
	isValid: boolean;
	errorMsg: string | null;
} {
	if (typeof cpf !== "string") {
		throw new TypeError("The input should be a string.");
	}
	if (errorMsg) {
		if (!Array.isArray(errorMsg)) throw new TypeError("Must be an Array");
		for (let index: number = 0; index < errorMsg.length; index += 1) {
			if (errorMsg[index] != null && typeof errorMsg[index] !== "string") {
				throw new TypeError(
					"All values within the array must be strings or null/undefined.",
				);
			}
		}
	}

	function getErrorMessage(index: number): string {
		const errorMessage: string | null = errorMsg ? errorMsg[index] : null;
		return errorMessage != null ? errorMessage : defaultErrorMsg[index];
	}

	try {
		if (!cpf) {
			return {
				isValid: false,
				errorMsg: getErrorMessage(0),
			};
		}

		const cpfClean: string = cpf.replace(/\D+/g, "");
		
		if (/^(\d)\1{10}$/.test(cpfLimpo)) {
			return {
				isValid: false,
				errorMsg: getErrorMessage(2),
			};
		}

		if (cpfLimpo.length !== 11) {
			return {
				isValid: false,
				errorMsg: getErrorMessage(1),
			};
		}

		const cpfArray: number[] = cpfClean.split('').map(Number);
		const validator = (sum: number) => (sum % 11 < 2 ? 0 : 11 - (sum % 11));
		const sum1 = cpfArray.slice(0, 9).reduce((acc, val, i) => acc + val * (10 - i), 0);
		const sum2 = cpfArray.slice(0, 10).reduce((acc, val, i) => acc + val * (11 - i), 0);

		if (cpfArray[9] === validator(sum1) && cpfArray[10] === validator(sum2)) {
			return {
				isValid: true,
				errorMsg: null,
			};
		}
		return {
			isValid: false,
			errorMsg: getErrorMessage(2),
		};
	} catch (err) {
		return {
			isValid: false,
			errorMsg: getErrorMessage(3),
		};
	}
}

export default cpfIsValid;
