package io.github.gabriel_logan.multiform_validator;

public class Validator {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";
    private Validator() {
        throw new IllegalStateException("Utility class");
    }

    public static boolean isAscii(String value) {
        if (value == null || value.isEmpty()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        return value.chars().allMatch(c -> c < 128);
    }

    public static boolean isBase64(String value) {
        if (value == null || value.isEmpty()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        return value.matches("^[a-zA-Z0-9+/]*={0,2}$");
    }

    public static boolean isCEP(String cep) {
        if (cep.length() < 8 || cep.length() > 10) {
            return false;
        }

        final String cepString = cep.replaceAll("\\D", "");

        if (cepString.length() != 8) {
            return false;
        }

        try {
            Integer.parseInt(cepString);
        } catch (NumberFormatException e) {
            return false;
        }

        return true;
    }

    public static boolean isPort(String port) {
        if (port == null || port.isEmpty()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        try {
            final int portNumber = Integer.parseInt(port);
            return portNumber >= 0 && portNumber <= 65535;
        } catch (NumberFormatException e) {
            return false;
        }
    }
}
