package io.multiform_validator;

import java.util.regex.Pattern;

public class PasswordStrengthTester {
    public  boolean isVeryWeak(String password) {
        int passwordLength = password.length();
        return passwordLength <= 5 && Pattern.matches("^\\d+$", password);
    }

    public  boolean isWeak(String password) {
        int passwordLength = password.length();
        return (passwordLength <= 5 && Pattern.matches("^[a-zA-Z0-9]+$", password)) ||
                (passwordLength >= 6 && Pattern.matches("^[a-zA-Z0-9]+$", password) && passwordLength <= 7) ||
                (passwordLength < 10 && Pattern.matches("(.)\\1{3,}", password)) ||
                (passwordLength >= 5 && passwordLength <= 8 && Pattern.matches("^\\d+$", password));
    }

    public  boolean isRegular(String password) {
        int passwordLength = password.length();
        return Pattern.matches("(.)\\1{5,}", password) && passwordLength > 10 ||
                (passwordLength >= 9 && passwordLength <= 12) ||
                (password.length() >= 6 &&
                        password.length() <= 8 &&
                        Pattern.matches("\\d", password) &&
                        Pattern.matches("[a-zA-Z]", password));
    }

    public  boolean isVeryStrong(String password) {
        int passwordLength = password.length();
        return passwordLength > 16 ||
                (password.length() >= 8 &&
                        Pattern.matches("[A-Z]", password) &&
                        Pattern.matches("[a-z]", password) &&
                        Pattern.matches("\\d", password) &&
                        Pattern.matches("[\\W_]", password));
    }

    public  boolean isStrong(String password) {
        int passwordLength = password.length();
        return (passwordLength >= 13 && passwordLength <= 16) ||
                (password.length() >= 8 &&
                        Pattern.matches("[A-Z]", password) &&
                        Pattern.matches("[a-z]", password) &&
                        Pattern.matches("\\d", password));
    }
}
