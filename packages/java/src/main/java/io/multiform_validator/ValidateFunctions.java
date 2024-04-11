package io.multiform_validator;

public abstract class ValidateFunctions {
    protected boolean isValid;

    public abstract String getErrorMsg();
}

class ValidFunction extends ValidateFunctions {
    public ValidFunction() {
        this.isValid = true;
    }

    @Override
    public String getErrorMsg() {
        return null;
    }
}

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