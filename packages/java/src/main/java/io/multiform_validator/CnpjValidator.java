package io.multiform_validator;

import java.util.Arrays;
public class CnpjValidator {
    private CnpjValidator() {
        throw new IllegalStateException("Utility class");
    }
    private static int calculateFirstVerifier(int[] cnpjBase) {
        final int[] weight = {5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
        int sum = 0;

        for (int i = 0; i < 12; i++) {
            sum += cnpjBase[i] * weight[i];
        }
        final int remainder = sum % 11;

        return remainder < 2 ? 0 : 11 - remainder;
    }

    private static int calculateSecondVerifier(int[] cnpjBase, int firstVerifier) {
        final int[] weight = {6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2};
        int sum = 0;

        for (int i = 0; i < 12; i++) {
            sum += cnpjBase[i] * weight[i];
        }
        sum += firstVerifier * weight[12];

        final int remainder = sum % 11;

        return remainder < 2 ? 0 : 11 - remainder;
    }

    public static boolean cnpjIsValid(String cnpj) {
        if (cnpj == null) {
            throw new NullPointerException("CNPJ cannot be null or empty");
        }

        final String cnpjClean = cnpj.replaceAll("\\D", "");

        if (cnpjClean.isEmpty()) {
            return false;
        }

        if (cnpjClean.length() != 14) {
            return false;
        }

        // Convert the string to an array of integers
        final int[] cnpjArray = cnpjClean.chars().map(Character::getNumericValue).toArray();

        // Calculate the first verifier and second verifier
        final int[] cnpjBase = Arrays.copyOfRange(cnpjArray, 0, 12);
        final int firstVerifier = calculateFirstVerifier(cnpjBase);

        final int[] cnpjBaseWithFirstVerifier = Arrays.copyOf(cnpjBase, cnpjBase.length + 1);
        cnpjBaseWithFirstVerifier[cnpjBaseWithFirstVerifier.length - 1] = firstVerifier;

        final int secondVerifier = calculateSecondVerifier(cnpjBaseWithFirstVerifier, firstVerifier);

        return cnpjArray[12] == firstVerifier && cnpjArray[13] == secondVerifier;
    }
}
