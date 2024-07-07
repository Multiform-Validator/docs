import org.junit.jupiter.api.Test;

import static io.multiform_validator.CpfValidator.cpfIsValid;
import static org.junit.jupiter.api.Assertions.*;

class CpfValidatorTest {
    @Test
    void testValidCpf() {
        assertTrue(cpfIsValid("12345678909"));
        assertTrue(cpfIsValid("11144477735"));
    }

    @Test
    void testInvalidCpf() {
        assertFalse(cpfIsValid("12345678901"));
        assertFalse(cpfIsValid("11144477736"));
    }

    @Test
    void testNullCpf() {
        assertThrows(NullPointerException.class, () -> cpfIsValid(null));
    }

    @Test
    void testEmptyCpf() {
        assertFalse(cpfIsValid(""));
    }

    @Test
    void testInvalidFormatCpf() {
        assertFalse(cpfIsValid("123.456.789-19"));
        assertFalse(cpfIsValid("1114447773A"));
    }

    @Test
    void testInvalidLengthCpf() {
        assertFalse(cpfIsValid("1234567890"));
        assertFalse(cpfIsValid("111444777350"));
    }
}