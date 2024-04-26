package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

import java.time.format.DateTimeParseException;
import java.util.regex.Pattern;

public class Date {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty";

    private Date() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    /**
     * Check if the given string is a valid date
     *
     * @param date The date string to be validated
     * @return true if the given string is a valid date, false otherwise
     */
    public static boolean isDate(@NotNull String date) {
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
}
