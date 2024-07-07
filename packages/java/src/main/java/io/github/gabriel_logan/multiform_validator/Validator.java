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

        return value.matches("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$");
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

    public static boolean isDate(String date) {
        if (date == null || date.isEmpty()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        return date.matches("^\\d{4}-\\d{2}-\\d{2}$");
    }


    public static boolean isDecimal(String value) {
        if (value == null || value.isEmpty()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        try {
            double parsedValue = Double.parseDouble(value);

            return parsedValue % 1 != 0;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    public static boolean isMACAddress(String macAddress) {
        if (macAddress == null || macAddress.isEmpty()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        return macAddress.matches("^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$");
    }

    public static boolean isMD5(String value) {
        if (value == null || value.isEmpty()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        return value.matches("^[a-fA-F0-9]{32}$");
    }

    public static boolean isNumber(String value) {
        if (value == null || value.isEmpty()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        return value.matches("^-?\\d+$");
    }

    public static boolean isPort(int port) {
        return port >= 0 && port <= 65535;
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

    public static boolean isPostalCode(String postalCode) {
        if (postalCode == null || postalCode.isEmpty()) {
            throw new IllegalArgumentException("Input value must be a string.");
        }

        final String usZipCodeRegex = "^\\d{5}(-\\d{4})?$";
        final String canadaPostalCodeRegex = "^[A-Za-z]\\d[A-Za-z] \\d[A-Za-z]\\d$";
        final String ukPostalCodeRegex = "^[A-Za-z]{1,2}\\d[A-Za-z\\d]? \\d[A-Za-z]{2}$";
        final String francePostalCodeRegex = "^\\d{5}$";
        final String netherlandsPostalCodeRegex = "^\\d{4}$";
        final String japanPostalCodeRegex = "^\\d{3}-\\d{4}$";
        final String spainPostalCodeRegex = "^\\d{5}$";
        final String southAfricaPostalCodeRegex = "^\\d{4}$";
        final String germanyPostalCodeRegex = "^\\d{5}$";
        final String switzerlandPostalCodeRegex = "^\\d{4}$";
        final String brazilPostalCodeRegex = "^\\d{5}-\\d{3}$";
        final String italyPostalCodeRegex = "^\\d{5}$";
        final String usZipCodeOnlyRegex = "^\\d{5}$";

        return postalCode.matches(usZipCodeRegex) ||
                postalCode.matches(canadaPostalCodeRegex) ||
                postalCode.matches(ukPostalCodeRegex) ||
                postalCode.matches(francePostalCodeRegex) ||
                postalCode.matches(netherlandsPostalCodeRegex) ||
                postalCode.matches(japanPostalCodeRegex) ||
                postalCode.matches(spainPostalCodeRegex) ||
                postalCode.matches(southAfricaPostalCodeRegex) ||
                postalCode.matches(germanyPostalCodeRegex) ||
                postalCode.matches(switzerlandPostalCodeRegex) ||
                postalCode.matches(brazilPostalCodeRegex) ||
                postalCode.matches(italyPostalCodeRegex) ||
                postalCode.matches(usZipCodeOnlyRegex);
    }

    public static boolean isTime(String time) {
        if (time == null || time.isEmpty()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        return time.matches("^(?:2[0-3]|1\\d|0?[0-9]):[0-5]\\d(?::[0-5]\\d)?(?: [APap][Mm])?$");
    }
}
