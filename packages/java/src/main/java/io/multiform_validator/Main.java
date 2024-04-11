package io.multiform_validator;

import static java.lang.System.*;

public class Main {
    /**
     * Test class
     */
    private static final ValidateFunctions testResult = Test.test("Hello, World!");
    private static final ValidateFunctions testValidateEmail = Email.validateEmail("hoo@gmail.co", 15, "us", false);

    /**
     * Main method
     */
    public static void main(String[] args) {
        out.println("Hello, World!");
        out.println("isAscii: " + Ascii.isAscii("Hello, World!a"));
        out.println("isBase64: " + Base64.isBase64("Hello, World!d"));
        out.println("isCEP: " + CEP.isCEP("12345-678"));
        out.println("isNumber: " + Number.isNumber("12345"));
        out.println("isNaN: " + Number.isNaN("12345a"));
        out.println("isCreditCardValid: " + CreditCard.isCreditCardValid("1234567890123456"));
        out.println("isDate: " + Date.isDate("2021-10-10"));
        out.println("isEmail: " + Email.isEmail("jaj@gmmoo.com"));
        out.println("isMacAddress: " + MacAddress.isMacAddress("00:00:00:00:00:00"));
        out.println("isMD5: " + MD5.isMD5("12345678901234567890123456789012"));
        out.println("isPort: " + Port.isPort("1234"));
        out.println("isPostalCode: " + PostalCode.isPostalCode("12345-678"));
        out.println("isTime: " + Time.isTime("12:34:56"));
        out.println("passwordStrengthTester: " + PasswordStrength.tester("1234567890"));
        out.println("cpfIsValid: " + Cpf.isValid("123.456.789-09"));
        out.println("cnpjIsValid: " + Cnpj.isValid("12.345.678/0001-09"));
        out.println("Test.main boolean: " + testResult.isValid);
        out.println("Test.main message: " + testResult.getErrorMsg());
        out.println("Email.main boolean: " + testValidateEmail.isValid);
        out.println("Email.main message: " + testValidateEmail.getErrorMsg());
        out.println("IdentifyFlagCard: " + CreditCard.identifyFlagCard("5237212984966627"));
        out.println("IdentifyFlagCard: " + CreditCard.identifyFlagCard("4024 0071 3438 4733"));
    }
}