package io.multiform_validator;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;
import org.jetbrains.annotations.NotNull;

public class CreditCard {
    private static final String INPUT_VALUE_CANNOT_BE_EMPTY = "Input value cannot be empty.";

    private CreditCard() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    /**
     * Validate a credit card number.
     *
     * @param cardNumber The credit card number to be validated.
     * @return True if the credit card number is valid, false otherwise.
     */
    public static boolean isCreditCardValid(@NotNull String cardNumber) {
        if (cardNumber.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        final String cleanedCreditCardInput = cardNumber.replaceAll("\\D", "");

        if (cleanedCreditCardInput.isBlank() || !Number.isNumber(cleanedCreditCardInput)) {
            return false;
        }

        final int[] creditCardDigits =
                cleanedCreditCardInput.chars().map(Character::getNumericValue).toArray();
        final int creditCardLength = creditCardDigits.length;

        int sum = 0;
        boolean isEven = false;

        for (int i = creditCardLength - 1; i >= 0; i--) {
            int digit = creditCardDigits[i];

            if (isEven) {
                digit *= 2;

                if (digit > 9) {
                    digit -= 9;
                }
            }

            sum += digit;
            isEven = !isEven;
        }

        return sum % 10 == 0;
    }

    /**
     * Identify the flag of a credit card.
     *
     * @param cardNumber The credit card number to be identified.
     * @return The flag of the credit card.
     */
    public static String identifyFlagCard(@NotNull String cardNumber) {
        if (cardNumber.isBlank()) {
            throw new IllegalArgumentException(INPUT_VALUE_CANNOT_BE_EMPTY);
        }

        Map<String, Pattern> flags = new HashMap<>();
        flags.put("Visa", Pattern.compile("^4"));
        flags.put("Mastercard", Pattern.compile("^5[1-5]"));
        flags.put("American Express", Pattern.compile("^3[47]"));
        flags.put("Discover", Pattern.compile("^6(?:011|5)"));
        flags.put("JCB", Pattern.compile("^(?:2131|1800|35\\d{3})"));
        flags.put("Diners Club", Pattern.compile("^3(?:0[0-5]|[68])"));
        flags.put("Maestro", Pattern.compile("^(?:5[0678]\\d\\d|6304|6390|67\\d\\d)"));
        flags.put("UnionPay", Pattern.compile("^(62|88)"));
        flags.put("Elo", Pattern.compile("^63[789]"));
        flags.put("Hipercard", Pattern.compile("^(3841|60)"));

        return flags.entrySet().stream()
                .filter(flag -> flag.getValue().matcher(cardNumber).find())
                .findFirst()
                .map(Map.Entry::getKey)
                .orElse("Unknown");
    }
}