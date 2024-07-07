import org.junit.jupiter.api.Test;

import static io.github.gabriel_logan.multiform_validator.CnpjValidator.cnpjIsValid;
import static org.junit.jupiter.api.Assertions.*;

class CnpjValidatorTest {
    @Test
    void testValidCnpj() {
        assertTrue(cnpjIsValid("72.231.875/0001-05"));
        assertTrue(cnpjIsValid("41997509000138"));
    }

    @Test
    void testInvalidCnpj() {
        assertFalse(cnpjIsValid("12.345.678/0001-91"));
        assertFalse(cnpjIsValid("12345678000191"));
    }

    @Test
    void testNullCnpj() {
        assertThrows(NullPointerException.class, () -> cnpjIsValid(null));
    }

    @Test
    void testEmptyCnpj() {
        assertFalse(cnpjIsValid(""));
    }

    @Test
    void testInvalidFormatCnpj() {
        assertFalse(cnpjIsValid("12.345.678/0001-9"));
        assertFalse(cnpjIsValid("1234567800019"));
    }

    @Test
    void testInvalidLengthCnpj() {
        assertFalse(cnpjIsValid("12.345.678/0001-900"));
        assertFalse(cnpjIsValid("123456780001900"));
    }
}