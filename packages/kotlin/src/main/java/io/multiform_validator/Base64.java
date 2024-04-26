package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

public class Base64 {

    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";

    private Base64() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    /**
     * Check if a string is Base64.
     *
     * @param value The string to check.
     * @return True if the string is Base64, false otherwise.
     * @throws IllegalArgumentException If the input value is empty.
     */
    public static boolean isBase64(@NotNull String value) {
        if (value.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        return value.matches("^[a-zA-Z0-9+/]*={0,2}$");
    }
}
