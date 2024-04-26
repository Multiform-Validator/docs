package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

import java.util.regex.Pattern;

public class MacAddress {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty";

    private MacAddress() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    /**
     * Check if the given string is a valid MAC address.
     *
     * @param macAddress the MAC address to validate
     * @return {@code true} if the given string is a valid MAC address, {@code false} otherwise
     * @throws IllegalArgumentException if the given MAC address is empty
     */
    public static boolean isMacAddress(@NotNull String macAddress) {
        if (macAddress.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        final Pattern macAddressRegex = Pattern.compile("^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$");
        return macAddressRegex.matcher(macAddress).matches();
    }
}
