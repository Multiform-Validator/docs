export interface ValidateFunctions {
	isValid: boolean;
	errorMsg: string | null;
}

export interface ValidatePassportNumber { isValid: boolean, country: string|null }

export type IsValidFunctions = boolean
