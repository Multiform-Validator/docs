package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

import java.time.format.DateTimeParseException;
import java.util.regex.Pattern;

public class Time {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";

    private Time() {
        throw new IllegalStateException("Utility class");
    }

    /**
     * Check if the given time is valid.
     *
     * @param time The time to validate.
     * @return true if the time is valid, false otherwise.
     */
    public static boolean isTime(@NotNull String time) {
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
}
