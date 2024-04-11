package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

import java.util.Arrays;

public class Cnpj {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";

    private Cnpj() {
        throw new IllegalStateException("Utility class");
    }

    /**
     * Validate CNPJ
     *
     * @param cnpj CNPJ to be validated
     * @return true if CNPJ is valid, false otherwise
     */
    public static boolean isValid(@NotNull String cnpj) {
        if (cnpj.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        if (cnpj.length() != 14 && cnpj.length() != 18) {
            return false;
        }

        try {
            final String cnpjClean = cnpj.replaceAll("\\D", "");

            final int[] cnpjArray = cnpjClean.chars().map(Character::getNumericValue).toArray();

            int firstVerifier = calculateFirstVerifier(Arrays.copyOfRange(cnpjArray, 0, 12));
            int secondVerifier = calculateSecondVerifier(Arrays.copyOfRange(cnpjArray, 0, 13), firstVerifier);

            return cnpjArray[12] == firstVerifier && cnpjArray[13] == secondVerifier;
        } catch (Exception e) {
            return false;
        }

    }

    private static int calculateFirstVerifier(int[] cnpjBase) {
        int sum = 0;
        int[] weights = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

        for (int i = 0; i < 12; i++) {
            sum += cnpjBase[i] * weights[i];
        }

        int remainder = sum % 11;

        return remainder < 2 ? 0 : 11 - remainder;
    }

    private static int calculateSecondVerifier(int[] cnpjBase, int firstVerifier) {
        int sum = 0;
        int[] weights = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};

        for (int i = 0; i < 13; i++) {
            sum += cnpjBase[i] * weights[i];
        }

        sum += firstVerifier * weights[12];
        int remainder = sum % 11;

        return remainder < 2 ? 0 : 11 - remainder;
    }
}
