package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

import java.util.regex.Pattern;

public class PostalCode {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";

    private PostalCode() {
        throw new IllegalStateException("Utility class");
    }

    /**
     * Check if the given postal code is valid.
     *
     * @param postalCode The postal code to validate.
     * @return True if the postal code is valid, false otherwise.
     */
    public static boolean isPostalCode(@NotNull String postalCode) {
        if (postalCode.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        final Pattern postalCodeRegex = Pattern.compile("^\\d{5}-\\d{3}$");
        return postalCodeRegex.matcher(postalCode).matches();
    }
}
