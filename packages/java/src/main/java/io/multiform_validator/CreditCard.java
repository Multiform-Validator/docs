package io.multiform_validator;

import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;

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

        final int[] creditCardDigits = cleanedCreditCardInput.chars().map(Character::getNumericValue).toArray();
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

        List<CardFlag> flags = new ArrayList<>();
        flags.add(new CardFlag("Visa", "^4"));
        flags.add(new CardFlag("Mastercard", "^5[1-5]"));
        flags.add(new CardFlag("American Express", "^3[47]"));
        flags.add(new CardFlag("Discover", "^6(?:011|5)"));
        flags.add(new CardFlag("JCB", "^(?:2131|1800|35\\d{3})"));
        flags.add(new CardFlag("Diners Club", "^3(?:0[0-5]|[68])"));
        flags.add(new CardFlag("Maestro", "^(?:5[0678]\\d\\d|6304|6390|67\\d\\d)"));
        flags.add(new CardFlag("UnionPay", "^(62|88)"));
        flags.add(new CardFlag("Elo", "^63[789]"));
        flags.add(new CardFlag("Hipercard", "^(3841|60)"));

        for (CardFlag flag : flags) {
            if (flag.interval.matcher(cardNumber).find()) {
                return flag.name;
            }
        }

        return "Unknown";
    }
}

/**
 * Class to represent a card flag.
 */
class CardFlag {
    String name;
    Pattern interval;

    CardFlag(String name, String interval) {
        this.name = name;
        this.interval = Pattern.compile(interval);
    }
}
