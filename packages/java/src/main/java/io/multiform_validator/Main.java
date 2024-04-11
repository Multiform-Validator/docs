package io.multiform_validator;

import java.time.format.DateTimeParseException;
import java.util.Arrays;
import java.util.regex.Pattern;

import static java.lang.System.*;
public class Main {
    public static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";

    public static void main(String[] args) {
        out.println("Hello, World!");
        out.println("isAscii: " + isAscii("Hello, World!a"));
        out.println("isBase64: " + isBase64("Hello, World!d"));
        out.println("isCEP: " + isCEP("12345-678"));
        out.println("isNumber: " + isNumber("12345"));
        out.println("isNaN: " + isNaN("12345a"));
        out.println("isCreditCardValid: " + isCreditCardValid("1234567890123456"));
        out.println("isDate: " + isDate("2021-10-10"));
        out.println("isEmail: " + isEmail("jaj@gmmoo.com"));
        out.println("isMacAddress: " + isMacAddress("00:00:00:00:00:00"));
        out.println("isMD5: " + isMD5("12345678901234567890123456789012"));
        out.println("isPort: " + isPort("1234"));
        out.println("isPostalCode: " + isPostalCode("12345-678"));
        out.println("isTime: " + isTime("12:34:56"));
        out.println("passwordStrengthTester: " + passwordStrengthTester("1234567890"));
        out.println("cpfIsValid: " + cpfIsValid("123.456.789-09"));
        out.println("cnpjIsValid: " + cnpjIsValid("12.345.678/0001-09"));
    }

    public static boolean isAscii(String value) {
        if (value.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        return value.chars().allMatch(c -> c < 128);
    }

    public static boolean isBase64(String value) {
        if (value.isBlank()) {
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

    public static boolean isNumber(String value) {
        if (value.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        try {
            Double.parseDouble(value);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }

    public static boolean isNaN(String value) {
        if (value.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        return !isNumber(value);
    }

    public static boolean isCreditCardValid(String cardNumber) {
        if (cardNumber.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        final String cleanedCreditCardInput = cardNumber.replaceAll("\\D", "");

        if (cleanedCreditCardInput.isBlank() || !isNumber(cleanedCreditCardInput)) {
            return false;
        }

        final int[] creditCardDigits = cleanedCreditCardInput.chars().map(Character::getNumericValue).toArray();
        final int creditCardLength = creditCardDigits.length;

        int sum = 0;
        boolean isEven = false;

        for (int i = creditCardLength - 1; i >= 0; i--) {
            int digit = creditCardDigits[i];

            if (isEven) {
                digit *= 2;

                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            isEven = !isEven;
        }

        return sum % 10 == 0;
    }

    public static boolean isDate(String date) {
        if (date.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        try {
            final Pattern dateStringRegex = Pattern.compile("^\\d{4}-\\d{2}-\\d{2}$");
            return dateStringRegex.matcher(date).matches();
        } catch (DateTimeParseException e) {
            return false;
        }
    }

    public static boolean isEmail(String email) {
        if (email.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        final Pattern emailRegex = Pattern.compile("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
        return emailRegex.matcher(email).matches();
    }

    public static boolean isMacAddress(String macAddress) {
        if (macAddress.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        final Pattern macAddressRegex = Pattern.compile("^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$");
        return macAddressRegex.matcher(macAddress).matches();
    }

    public static boolean isMD5(String md5) {
        if (md5.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        final Pattern md5Regex = Pattern.compile("^[a-fA-F0-9]{32}$");
        return md5Regex.matcher(md5).matches();
    }

    public static boolean isPort(String port) {
        if (port.isBlank()) {
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
        if (postalCode.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        final Pattern postalCodeRegex = Pattern.compile("^\\d{5}-\\d{3}$");
        return postalCodeRegex.matcher(postalCode).matches();
    }

    public static boolean isTime(String time) {
        if (time.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        try {
            final Pattern timeRegex = Pattern.compile("^\\d{2}:\\d{2}:\\d{2}$");
            return timeRegex.matcher(time).matches();
        } catch (DateTimeParseException e) {
            return false;
        }
    }

    public static String passwordStrengthTester(String password) {
        PasswordStrengthTester passwordStrengthTester = new PasswordStrengthTester();

        if (password == null) throw new IllegalArgumentException("The input should be a string.");

        if (passwordStrengthTester.isVeryWeak(password)) {
            return "veryWeak";
        } else if (passwordStrengthTester.isWeak(password)) {
            return "weak";
        } else if (passwordStrengthTester.isRegular(password)) {
            return "regular";
        } else if (passwordStrengthTester.isVeryStrong(password)) {
            return "veryStrong";
        } else if (passwordStrengthTester.isStrong(password)) {
            return "strong";
        }

        return "unknown";
    }

    public static boolean cpfIsValid(String cpf) {
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

    public static boolean cnpjIsValid(String cnpj) {
        Cnpj cnpjMethods = new Cnpj();

        if (cnpj.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        if (cnpj.length() != 14 && cnpj.length() != 18) {
            return false;
        }

        try {
            final String cnpjClean = cnpj.replaceAll("\\D", "");

            final int[] cnpjArray = cnpjClean.chars().map(Character::getNumericValue).toArray();

            int firstVerifier = cnpjMethods.calculateFirstVerifier(Arrays.copyOfRange(cnpjArray, 0, 12));
            int secondVerifier = cnpjMethods.calculateSecondVerifier(Arrays.copyOfRange(cnpjArray, 0, 13), firstVerifier);

            return cnpjArray[12] == firstVerifier && cnpjArray[13] == secondVerifier;
        } catch (Exception e) {
            return false;
        }

    }
}