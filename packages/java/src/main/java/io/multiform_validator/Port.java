package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

public class Port {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";

    private Port() {
        throw new IllegalStateException("Utility class");
    }

    /**
     * Check if the given port is valid.
     *
     * @param port The port to validate.
     * @return True if the port is valid, false otherwise.
     */
    public static boolean isPort(@NotNull String port) {
        if (port.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        try {
            final int portNumber = Integer.parseInt(port);
            return portNumber >= 0 && portNumber <= 65535;
        } catch (NumberFormatException e) {
            return false;
        }
    }
}
