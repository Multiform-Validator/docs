package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

import java.util.regex.Pattern;

public class MD5 {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";

    private MD5() {
        throw new IllegalStateException("Utility class");
    }

    /**
     * Check if the given string is a valid MD5 hash.
     *
     * @param md5 The string to check.
     * @return True if the string is a valid MD5 hash, false otherwise.
     */
    public static boolean isMD5(@NotNull String md5) {
        if (md5.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        final Pattern md5Regex = Pattern.compile("^[a-fA-F0-9]{32}$");
        return md5Regex.matcher(md5).matches();
    }
}
