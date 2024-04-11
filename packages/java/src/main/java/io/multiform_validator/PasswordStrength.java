package io.multiform_validator;

import org.jetbrains.annotations.Contract;
import org.jetbrains.annotations.NotNull;

import java.util.regex.Pattern;

public class PasswordStrength {
    private PasswordStrength() {
        throw new IllegalStateException("Utility class");
    }

    /**
     * Check the strength of the given password.
     *
     * @param password The password to check.
     * @return The strength of the password.
     */
    @Contract("null -> fail")
    public static @NotNull String tester(String password) {
        if (password == null) throw new IllegalArgumentException("The input should be a string.");

        if (isVeryWeak(password)) {
            return "veryWeak";
        } else if (isWeak(password)) {
            return "weak";
        } else if (isRegular(password)) {
            return "regular";
        } else if (isVeryStrong(password)) {
            return "veryStrong";
        } else if (isStrong(password)) {
            return "strong";
        }

        return "unknown";
    }

    private static boolean isVeryWeak(@NotNull String password) {
        int passwordLength = password.length();
        return passwordLength <= 5 && Pattern.matches("^\\d+$", password);
    }

    private static boolean isWeak(@NotNull String password) {
        int passwordLength = password.length();
        return (passwordLength <= 5 && Pattern.matches("^[a-zA-Z0-9]+$", password)) ||
                (passwordLength >= 6 && Pattern.matches("^[a-zA-Z0-9]+$", password) && passwordLength <= 7) ||
                (passwordLength < 10 && Pattern.matches("(.)\\1{3,}", password)) ||
                (passwordLength >= 5 && passwordLength <= 8 && Pattern.matches("^\\d+$", password));
    }

    private static boolean isRegular(@NotNull String password) {
        int passwordLength = password.length();
        return Pattern.matches("(.)\\1{5,}", password) && passwordLength > 10 ||
                (passwordLength >= 9 && passwordLength <= 12) ||
                (password.length() >= 6 &&
                        password.length() <= 8 &&
                        Pattern.matches("\\d", password) &&
                        Pattern.matches("[a-zA-Z]", password));
    }

    private static boolean isVeryStrong(@NotNull String password) {
        int passwordLength = password.length();
        return passwordLength > 16 ||
                (password.length() >= 8 &&
                        Pattern.matches("[A-Z]", password) &&
                        Pattern.matches("[a-z]", password) &&
                        Pattern.matches("\\d", password) &&
                        Pattern.matches("[\\W_]", password));
    }

    private static boolean isStrong(@NotNull String password) {
        int passwordLength = password.length();
        return (passwordLength >= 13 && passwordLength <= 16) ||
                (password.length() >= 8 &&
                        Pattern.matches("[A-Z]", password) &&
                        Pattern.matches("[a-z]", password) &&
                        Pattern.matches("\\d", password));
    }
}
