package io.multiform_validator;

import org.jetbrains.annotations.Contract;
import org.jetbrains.annotations.NotNull;

public class Test {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";

    private Test() {
        throw new IllegalStateException("Utility class");
    }

    @Contract("null -> fail")
    public static @NotNull ValidateFunctions test(String value) {
        if (value == null || value.isEmpty()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        if (value.equals("valid")) {
            return new ValidFunction();
        } else {
            return new InvalidFunction("Invalid value.");
        }

    }
}
