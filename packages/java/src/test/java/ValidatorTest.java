import io.github.gabriel_logan.multiform_validator.Validator;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ValidatorTest {
    @Test
    void testIsAscii() {
        assertTrue(Validator.isAscii("Hello World"));
        assertFalse(Validator.isAscii("こんにちは"));
        assertThrows(IllegalArgumentException.class, () -> Validator.isAscii(null));
        assertThrows(IllegalArgumentException.class, () -> Validator.isAscii(""));
    }

    @Test
    void testIsBase64() {
        assertTrue(Validator.isBase64("SGVsbG8gV29ybGQ="));
        assertFalse(Validator.isBase64("Hello World"));
        assertThrows(IllegalArgumentException.class, () -> Validator.isBase64(null));
        assertThrows(IllegalArgumentException.class, () -> Validator.isBase64(""));
    }

    @Test
    void testIsCEP() {
        assertTrue(Validator.isCEP("12345678"));
        assertFalse(Validator.isCEP("1234567890"));
        assertFalse(Validator.isCEP("abcdefgh"));
    }

    @Test
    void testIsDate() {
        assertTrue(Validator.isDate("2022-01-01"));
        assertFalse(Validator.isDate("01-01-2022"));
        assertThrows(IllegalArgumentException.class, () -> Validator.isDate(null));
        assertThrows(IllegalArgumentException.class, () -> Validator.isDate(""));
    }

    @Test
    void testIsDecimal() {
        assertTrue(Validator.isDecimal("3.14"));
        assertFalse(Validator.isDecimal("42"));
        assertThrows(IllegalArgumentException.class, () -> Validator.isDecimal(null));
        assertThrows(IllegalArgumentException.class, () -> Validator.isDecimal(""));
    }

    @Test
    void testIsMACAddress() {
        assertTrue(Validator.isMACAddress("00:1B:44:11:3A:B7"));
        assertFalse(Validator.isMACAddress("Hello World"));
        assertThrows(IllegalArgumentException.class, () -> Validator.isMACAddress(null));
        assertThrows(IllegalArgumentException.class, () -> Validator.isMACAddress(""));
    }

    @Test
    void testIsMD5() {
        assertTrue(Validator.isMD5("d41d8cd98f00b204e9800998ecf8427e"));
        assertFalse(Validator.isMD5("Hello World"));
        assertThrows(IllegalArgumentException.class, () -> Validator.isMD5(null));
        assertThrows(IllegalArgumentException.class, () -> Validator.isMD5(""));
    }

    @Test
    void testIsNumber() {
        assertTrue(Validator.isNumber("42"));
        assertFalse(Validator.isNumber("Hello World"));
        assertThrows(IllegalArgumentException.class, () -> Validator.isNumber(null));
        assertThrows(IllegalArgumentException.class, () -> Validator.isNumber(""));
    }

    @Test
    void testIsPortInt() {
        assertTrue(Validator.isPort(80));
        assertFalse(Validator.isPort(-1));
    }

    @Test
    void testIsPortString() {
        assertTrue(Validator.isPort("80"));
        assertFalse(Validator.isPort("-1"));
        assertThrows(IllegalArgumentException.class, () -> Validator.isPort(null));
        assertThrows(IllegalArgumentException.class, () -> Validator.isPort(""));
    }

    @Test
    void testIsPostalCode() {
        assertTrue(Validator.isPostalCode("12345"));
        assertFalse(Validator.isPostalCode("Hello World"));
        assertThrows(IllegalArgumentException.class, () -> Validator.isPostalCode(null));
        assertThrows(IllegalArgumentException.class, () -> Validator.isPostalCode(""));
    }

    @Test
    void testIsTime() {
        assertTrue(Validator.isTime("12:34"));
        assertFalse(Validator.isTime("Hello World"));
        assertThrows(IllegalArgumentException.class, () -> Validator.isTime(null));
        assertThrows(IllegalArgumentException.class, () -> Validator.isTime(""));
    }
}