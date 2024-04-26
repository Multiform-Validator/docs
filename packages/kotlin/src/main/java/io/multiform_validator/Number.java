package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

public class Number {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";

    private Number() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    /**
     * Check if the given value is a number.
     *
     * @param value The value to check.
     * @return True if the value is a number, false otherwise.
     */
    public static boolean isNumber(@NotNull String value) {
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

    /**
     * Check if the given value is not a number.
     *
     * @param value The value to check.
     * @return True if the value is not a number, false otherwise.
     */
    public static boolean isNaN(@NotNull String value) {
        if (value.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        return !isNumber(value);
    }

    /**
     * Check if the given value is an integer.
     *
     * @param value The value to check.
     * @return True if the value is an integer, false otherwise.
     */
    public static boolean isInteger(@NotNull String value) {
        if (value.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }
        try {
            Integer.parseInt(value);
            return true;
        } catch (NumberFormatException e) {
            return false;
        }
    }
}
