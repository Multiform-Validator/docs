package io.github.gabriel_logan;

public class ValidationResult {
    public boolean isValid;
    public String errorMsg;

    public ValidationResult(boolean isValid, String errorMsg) {
        this.isValid = isValid;
        this.errorMsg = errorMsg;
    }
}