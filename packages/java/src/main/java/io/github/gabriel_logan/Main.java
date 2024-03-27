package io.github.gabriel_logan;

import io.github.gabriel_logan.types.ValidationResult;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main {
	/**
	 * Checks if a string is empty or contains only whitespace.
	 *
	 * @param value the string to check
	 * @return true if the string is empty or contains only whitespace, false otherwise
	 * @throws IllegalArgumentException if the input value is not a string
	 */
	public boolean isEmpty(String value) throws IllegalArgumentException {
		if (value == null) {
			throw new IllegalArgumentException("Input value must be a string.");
		}

		return value.trim().length() == 0;
	}

    private CpfValidator cpfValidator = new CpfValidator();
}