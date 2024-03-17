export type ValidateFunctions =
	| {
			isValid: true;
			errorMsg: null;
	  }
	| {
			isValid: false;
			errorMsg: string;
	  };

export interface ValidatePassportNumber {
	isValid: boolean;
	country: string | null;
}

export type IsValidFunctions = boolean;
