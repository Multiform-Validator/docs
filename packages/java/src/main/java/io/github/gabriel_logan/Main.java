package io.github.gabriel_logan;

import io.github.gabriel_logan.types.ValidationResult;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
	private String getErrorMessage(int code) {
		// Implemente esta função para retornar a mensagem de erro apropriada
		return "";
    }

	/**
	 * Checks if a string is empty or contains only whitespace.
	 *
	 * @param value the string to check
	 * @return true if the string is empty or contains only whitespace, false otherwise
	 * @throws IllegalArgumentException if the input value is not a string
	 */
	public static boolean isEmpty(String value) throws IllegalArgumentException {
		if (value == null) {
			throw new IllegalArgumentException("Input value must be a string.");
		}

		return value.trim().length() == 0;
	}

	public ValidationResult cpfIsValid(String cpf) {
		try {
			int numeroBase = 10;
			int numeroBase2 = 11;
			int somaTotal = 0;
			int somaTotal2 = 0;

			if (cpf.length() != 11) {
				return new ValidationResult(false, getErrorMessage(2));
			}

			int primeiroVerificador = 0;
			int segundoVerificador = 0;

			for (int repetidor = 0; repetidor < 11; repetidor++) {
				int multiplicador = Character.getNumericValue(cpf.charAt(repetidor)) * numeroBase;
				numeroBase--;
				somaTotal += multiplicador;

				int multiplicador2 = Character.getNumericValue(cpf.charAt(repetidor)) * numeroBase2;
				numeroBase2--;
				somaTotal2 += multiplicador2;

				int valorDeVerificacao = somaTotal - Character.getNumericValue(cpf.charAt(9));
				int valorDeVerificacao2 = somaTotal2 - Character.getNumericValue(cpf.charAt(10));

				primeiroVerificador = 11 - (valorDeVerificacao % 11);
				segundoVerificador = 11 - (valorDeVerificacao2 % 11);
			}

			if (primeiroVerificador > 9) primeiroVerificador = 0;
			if (segundoVerificador > 9) segundoVerificador = 0;

			if (primeiroVerificador == Character.getNumericValue(cpf.charAt(9))
					&& segundoVerificador == Character.getNumericValue(cpf.charAt(10))) {
				return new ValidationResult(true, null);
			}

			return new ValidationResult(false, getErrorMessage(2));
		} catch (Exception e) {
			return new ValidationResult(false, getErrorMessage(3));
		}
	}
}