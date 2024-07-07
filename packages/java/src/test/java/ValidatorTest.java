import io.multiform_validator.Validator;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class ValidatorTest {
    @Test
    void testIsAscii() {
        assertTrue(Validator.isAscii("Hello World"));
        assertTrue(Validator.isAscii("123"));
        assertFalse(Validator.isAscii("こんにちは"));
        assertFalse(Validator.isAscii("你好"));
        assertThrows(IllegalArgumentException.class, () -> Validator.isAscii(null));
        assertThrows(IllegalArgumentException.class, () -> Validator.isAscii(""));
    }

    @Test
    void testIsBase64() {
        assertTrue(Validator.isBase64("SGVsbG8gV29ybGQ="));
        assertTrue(Validator.isBase64("MTIzNDU2Nzg5MA=="));
        assertFalse(Validator.isBase64("Hello World"));
        assertThrows(IllegalArgumentException.class, () -> Validator.isBase64(null));
        assertThrows(IllegalArgumentException.class, () -> Validator.isBase64(""));
    }

    @Test
    void testIsCEP() {
        assertTrue(Validator.isCEP("12345678"));
        assertTrue(Validator.isCEP("12345-678"));
        assertFalse(Validator.isCEP("1234567"));
        assertFalse(Validator.isCEP("123456789"));
        assertFalse(Validator.isCEP("abcdefgh"));
    }

    @Test
    void testIsPort() {
        assertTrue(Validator.isPort("80"));
        assertTrue(Validator.isPort("8080"));
        assertFalse(Validator.isPort("-1"));
        assertFalse(Validator.isPort("65536"));
        assertFalse(Validator.isPort("abc"));
        assertThrows(IllegalArgumentException.class, () -> Validator.isPort(null));
        assertThrows(IllegalArgumentException.class, () -> Validator.isPort(""));
    }
}