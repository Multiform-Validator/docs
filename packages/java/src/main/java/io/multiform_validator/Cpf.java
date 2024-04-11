package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

public class Cpf {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";

    private Cpf() {
        throw new IllegalStateException("Utility class");
    }

    /**
     * Validate a CPF number.
     *
     * @param cpf The CPF number to be validated.
     * @return True if the CPF number is valid, false otherwise.
     */
    public static boolean isValid(@NotNull String cpf) {
        if (cpf.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        try {
            int baseNumber = 10;
            int baseNumber2 = 11;

            int somaTotal = 0;
            int somaTotal2 = 0;

            if (cpf.length() != 11 && cpf.length() != 14) {
                return false;
            }

            final String cpfClean = cpf.replaceAll("\\D", "");

            if (cpfClean.chars().allMatch(c -> c == cpfClean.charAt(0))) {
                return false;
            }

            int firstVerifier = 0;
            int secondVerifier = 0;

            int ninthCharAsInt = Integer.parseInt(String.valueOf(cpfClean.charAt(9)));
            int tenthCharAsInt = Integer.parseInt(String.valueOf(cpfClean.charAt(10)));

            for (int repeater = 0; repeater < 11; repeater++) {
                int currentCharAsInt = Integer.parseInt(String.valueOf(cpfClean.charAt(repeater)));

                final int multiplicative = currentCharAsInt * baseNumber;

                baseNumber--;
                somaTotal += multiplicative;

                final int multiplicative2 = currentCharAsInt * baseNumber2;

                baseNumber2--;
                somaTotal2 += multiplicative2;

                final int verificationValue = somaTotal - ninthCharAsInt;
                final int verificationValue2 = somaTotal2 - tenthCharAsInt;
                firstVerifier = 11 - (verificationValue % 11);
                secondVerifier = 11 - (verificationValue2 % 11);
            }
            if (firstVerifier > 9) {
                firstVerifier = 0;
            }
            if (secondVerifier > 9) {
                secondVerifier = 0;
            }

            return firstVerifier == ninthCharAsInt && secondVerifier == tenthCharAsInt;
        } catch (Exception e) {
            return false;
        }
    }
}
