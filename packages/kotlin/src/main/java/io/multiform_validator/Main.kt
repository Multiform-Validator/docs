package io.multiform_validator

object Main {
    /**
     * Test class
     */
    private val testResult = Test.test("Hello, World!")
    private val testValidateEmail = Email.validateEmail("hoo@gmail.co", 15, "us", false)

    /**
     * Main method
     */
    @JvmStatic
    fun main(args: Array<String>) {
        println("Hello, World!")
        println("isAscii: " + Ascii.isAscii("Hello, World!a"))
        println("isBase64: " + Base64.isBase64("Hello, World!d"))
        println("isCEP: " + CEP.isCEP("12345-678"))
        println("isNumber: " + Number.isNumber("12345"))
        println("isNaN: " + Number.isNaN("12345a"))
        println("isCreditCardValid: " + CreditCard.isCreditCardValid("1234567890123456"))
        println("isDate: " + Date.isDate("2021-10-10"))
        println("isEmail: " + Email.isEmail("jaj@gmmoo.com"))
        println("isMacAddress: " + MacAddress.isMacAddress("00:00:00:00:00:00"))
        println("isMD5: " + MD5.isMD5("12345678901234567890123456789012"))
        println("isPort: " + Port.isPort("1234"))
        println("isPostalCode: " + PostalCode.isPostalCode("12345-678"))
        println("isTime: " + Time.isTime("12:34:56"))
        println("passwordStrengthTester: " + PasswordStrength.tester("1234567890"))
        println("cpfIsValid: " + Cpf.isValid("123.456.789-09"))
        println("cnpjIsValid: " + Cnpj.isValid("12.345.678/0001-09"))
        println("Test.main boolean: " + testResult.isValid)
        println("Test.main message: " + testResult.errorMsg)
        println("Email.main boolean: " + testValidateEmail.isValid)
        println("Email.main message: " + testValidateEmail.errorMsg)
        println("IdentifyFlagCard: " + CreditCard.identifyFlagCard("5237212984966627"))
        println("IdentifyFlagCard: " + CreditCard.identifyFlagCard("4024 0071 3438 4733"))
    }
}