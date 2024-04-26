package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

public class Ascii {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";

    private Ascii() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    /**
     * Check if a string is ASCII.
     *
     * @param value The string to check.
     * @return True if the string is ASCII, false otherwise.
     * @throws IllegalArgumentException If the input value is empty.
     */
    public static boolean isAscii(@NotNull String value) {
        if (value.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        return value.chars().allMatch(c -> c < 128);
    }
}
