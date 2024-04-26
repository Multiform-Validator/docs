package io.multiform_validator;

/**
 * Abstract class for validation functions.
 */
public abstract class ValidateFunctions {
    protected boolean isValid;

    public abstract String getErrorMsg();
}

/**
 * Class for valid functions.
 */
class ValidFunction extends ValidateFunctions {
    public ValidFunction() {
        this.isValid = true;
    }

    @Override
    public String getErrorMsg() {
        return null;
    }
}

/**
 * Class for invalid functions.
 */
class InvalidFunction extends ValidateFunctions {
    public final String errorMsg;

    public InvalidFunction(String errorMsg) {
        this.isValid = false;
        this.errorMsg = errorMsg;
    }

    @Override
    public String getErrorMsg() {
        return errorMsg;
    }
}