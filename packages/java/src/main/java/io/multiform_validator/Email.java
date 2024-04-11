package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

import java.util.regex.Pattern;

public class Email {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";

    private Email() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    /**
     * Check if the given string is a valid email
     *
     * @param email The email string to be validated
     * @return true if the given string is a valid email, false otherwise
     */
    public static boolean isEmail(@NotNull String email) {
        if (email.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        final Pattern emailRegex = Pattern.compile("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
        return emailRegex.matcher(email).matches();
    }

    /**
     * Validate the given email string
     *
     * @param email        The email string to be validated
     * @param maxLength    The maximum length of the email string
     * @param country      The country code of the email domain
     * @param validDomains Whether to validate the email domain
     * @return A ValidateFunctions object containing the validation result
     */
    public static @NotNull ValidateFunctions validateEmail(@NotNull String email, Integer maxLength, String country, boolean validDomains) {
        if (email.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        if (!isLengthValid(email, maxLength)) {
            return new InvalidFunction("Email length is greater than " + maxLength + " characters.");
        }

        if (!isCountryValid(country)) {
            return new InvalidFunction("Country cannot be empty.");
        }

        if (validDomains && !isDomainValid(email, country)) {
            return new InvalidFunction("Email domain must be ." + country.toLowerCase());
        }

        return isEmail(email) ? new ValidFunction() : new InvalidFunction("Invalid email format.");
    }

    private static boolean isLengthValid(String email, Integer maxLength) {
        return maxLength == null || email.length() <= maxLength;
    }

    private static boolean isCountryValid(String country) {
        return !country.isBlank();
    }

    private static boolean isDomainValid(String email, String country) {
        return email.endsWith("." + country.toLowerCase());
    }
}
