package io.multiform_validator;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.regex.Pattern;

public class EmailValidator {
    private EmailValidator() {
        throw new IllegalStateException("Utility class");
    }

    public static boolean isEmail(String email) {
        if (email == null) {
            throw new NullPointerException("Email cannot be null");
        }

        final Pattern startsWithSpecialChar = Pattern.compile("^[^a-zA-Z0-9]");

        if (startsWithSpecialChar.matcher(email).find()) {
            return false;
        }

        final Pattern regex = Pattern.compile("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");

        if (!regex.matcher(email).find()) {
            return false;
        }

        final int beforeAt = email.indexOf("@");
        final int afterAt = email.indexOf("@") + 1;
        final int afterLastDot = email.lastIndexOf(".");

        if (Character.isDigit(email.charAt(afterAt))) {
            return false;
        }

        if (Character.isDigit(email.charAt(afterLastDot))) {
            return false;
        }

        if (email.substring(0, beforeAt).contains("..")) {
            return false;
        }

        if (email.substring(0, beforeAt).endsWith(".")) {
            return false;
        }

        final String[] parts = email.split("\\.");

        if (parts.length > 2 && parts[parts.length - 2].equals(parts[parts.length - 3])) {
            return false;
        }

        // Check if there is more than one @
        if (email.split("@").length - 1 > 1) {
            return false;
        }

        if (email.substring(afterAt).contains("..")) {
            return false;
        }

        String[] domainParts = email.split("@")[1].split("\\.");
        Set<String> uniqueDomainParts = new HashSet<>(Arrays.asList(domainParts));

        return domainParts.length == uniqueDomainParts.size();
    }
}



