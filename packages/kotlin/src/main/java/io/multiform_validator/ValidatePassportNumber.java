package io.multiform_validator;

/**
 * ValidatePassportNumber
 */
public class ValidatePassportNumber {
    public final boolean isValid;
    public final String country;

    /**
     * Constructor
     */
    public ValidatePassportNumber(boolean isValid, String country) {
        this.isValid = isValid;
        this.country = country;
    }

    // getters and setters
}