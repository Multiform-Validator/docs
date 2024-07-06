defaultErrorMsg = [
  'CPF invalid',
  'CPF must have 11 numerical digits',
  'CPF is not valid',
  'Unknown error',
]

def cpfValidator(cpf, errorMsg = defaultErrorMsg):
	"""
	Validates a CPF (Brazilian individual taxpayer registry identification) number.

	:param cpf: The CPF number to be validated.
	:param error_msg: An optional list of error messages.
	:return: A dictionary with 'is_valid' (boolean) and 'error_msg' (string) properties.
	"""
	if (type(cpf) != str): raise TypeError('The input should be a string.')

	if (errorMsg):
			if (not isinstance(errorMsg, list)):
					raise TypeError('Must be a list')
			for index in range(len(errorMsg)):
					if errorMsg[index] is not None and not isinstance(errorMsg[index], str):
							raise TypeError('All values within the list must be strings or None.')

	def getErrorMessage(index):
			if (errorMsg and index >= 0 and index < len(errorMsg)):
					errorMessage = errorMsg[index]
					return errorMessage if errorMessage is not None else defaultErrorMsg[index]
			return defaultErrorMsg[index]

	try:

		if(not cpf):
			return {
				"isValid": False,
				"errorMsg": getErrorMessage(0)
			}

		numeroBase = 10
		numeroBase2 = 11
		somaTotal = somaTotal2 = 0

		if(len(cpf) != 11 and len(cpf) != 14):
			return {
				"isValid": False,
				"errorMsg": getErrorMessage(1),
			}

		cpfLimpo = ''.join(filter(str.isdigit, cpf))

		if (len(cpfLimpo) == 11 and cpfLimpo == cpfLimpo[0] * 11):
			return {
					"isValid": False,
					"errorMsg": getErrorMessage(2),
			}

		primeiroVerificador = segundoVerificador = repetidor = 0

		while (repetidor < 11):
			multiplicador = int(cpfLimpo[repetidor]) * numeroBase
			numeroBase -= 1
			somaTotal += multiplicador

			multiplicador2 = int(cpfLimpo[repetidor]) * numeroBase2
			numeroBase2 -= 1
			somaTotal2 += multiplicador2

			valorDeVerificacao = somaTotal - int(cpfLimpo[9])
			valorDeVerificacao2 = somaTotal2 - int(cpfLimpo[10])

			primeiroVerificador = 11 - (valorDeVerificacao % 11)
			segundoVerificador = 11 - (valorDeVerificacao2 % 11)

			repetidor += 1

		if(primeiroVerificador > 9): primeiroVerificador = 0
		if(segundoVerificador > 9): segundoVerificador = 0

		if(primeiroVerificador == int(cpfLimpo[9]) and segundoVerificador == int(cpfLimpo[10])):
			return {
        "isValid": True,
        "errorMsg": None,
      }
		return {
			"isValid": False,
			"errorMsg": getErrorMessage(2)
		}
	except:
		return {
      "isValid": False,
      "errorMsg": getErrorMessage(3),
    }