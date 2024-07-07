import org.junit.jupiter.api.Test;

import static io.github.gabriel_logan.multiform_validator.CreditCardValidator.identifyFlagCard;
import static io.github.gabriel_logan.multiform_validator.CreditCardValidator.isCreditCardValid;
import static org.junit.jupiter.api.Assertions.*;

class CreditCardValidatorTest {
    @Test
    void testIsCreditCardValid() {
        assertTrue(isCreditCardValid("4111111111111111"));
        assertTrue(isCreditCardValid("5500000000000004"));
        assertFalse(isCreditCardValid("1234567890123456"));
        assertFalse(isCreditCardValid("12345678901234567890"));
        assertThrows(IllegalArgumentException.class, () -> isCreditCardValid(null));
        assertThrows(IllegalArgumentException.class, () -> isCreditCardValid(""));
    }

    @Test
    void testIdentifyFlagCard() {
        assertEquals("Visa", identifyFlagCard("4111111111111111"));
        assertEquals("Mastercard", identifyFlagCard("5555555555554444"));
        assertEquals("American Express", identifyFlagCard("378282246310005"));
        assertEquals("Discover", identifyFlagCard("6011111111111117"));
        assertEquals("JCB", identifyFlagCard("3530111333300000"));
        assertEquals("Diners Club", identifyFlagCard("30569309025904"));
        assertEquals("Maestro", identifyFlagCard("6304000000000000"));
        assertEquals("UnionPay", identifyFlagCard("6200000000000005"));
        assertEquals("Elo", identifyFlagCard("6370950000000005"));
        assertEquals("Hipercard", identifyFlagCard("3841000000000000"));
        assertEquals("Unknown", identifyFlagCard("1234567890123456"));
        assertThrows(IllegalArgumentException.class, () -> identifyFlagCard(null));
        assertThrows(IllegalArgumentException.class, () -> identifyFlagCard(""));
    }
}