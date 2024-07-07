import org.junit.jupiter.api.Test;

import static io.multiform_validator.EmailValidator.isEmail;
import static org.junit.jupiter.api.Assertions.*;

class EmailValidatorTest {
    @Test
    void testValidEmail() {
        assertTrue(isEmail("test@example.com"));
        assertTrue(isEmail("john.doe@example.com"));
    }

    @Test
    void testInvalidEmail() {
        assertFalse(isEmail("test@example"));
        assertFalse(isEmail("john.doe@example"));
        assertFalse(isEmail("test@example."));
        assertFalse(isEmail("john.doe@example."));
        assertFalse(isEmail("@example.com"));
        assertFalse(isEmail("@example."));
        assertFalse(isEmail("test@.com"));
        assertFalse(isEmail("john.doe@.com"));
        assertFalse(isEmail("test@."));
        assertFalse(isEmail("john.doe@."));
        assertFalse(isEmail("test@@example.com"));
        assertFalse(isEmail("john.doe@@example.com"));
        assertFalse(isEmail("test@example..com"));
        assertFalse(isEmail("john.doe@example..com"));
        assertFalse(isEmail("test@example.com."));
        assertFalse(isEmail("john.doe@example.com."));
        assertFalse(isEmail("test@example.."));
        assertFalse(isEmail("john.doe@example.."));
        assertFalse(isEmail("test@example.com.."));
        assertFalse(isEmail("john.doe@example.com.."));
        assertFalse(isEmail("test@example..com."));
        assertFalse(isEmail("john.doe@example..com."));
        assertFalse(isEmail("test@example.com.."));
        assertFalse(isEmail("john.doe@example.com.."));
        assertFalse(isEmail("test@example..com.."));
        assertFalse(isEmail("john.doe@example..com.."));
        assertFalse(isEmail("test@example.com..."));
        assertFalse(isEmail("john.doe@example.com..."));
        assertFalse(isEmail("test@example...com"));
        assertFalse(isEmail("john.doe@example...com"));
        assertFalse(isEmail("test@example.com..."));
        assertFalse(isEmail("john.doe@example.com..."));
        assertFalse(isEmail("test@example...com."));
        assertFalse(isEmail("john.doe@example...com."));
        assertFalse(isEmail("test@example.com..."));
        assertFalse(isEmail("john.doe@example.com..."));
        assertFalse(isEmail("test@example...com.."));
        assertFalse(isEmail("john.doe@example...com.."));
        assertFalse(isEmail("test@example.com...."));
        assertFalse(isEmail("john.doe@example.com...."));
        assertFalse(isEmail("test@example....com"));
        assertFalse(isEmail("john.doe@example....com"));
        assertFalse(isEmail("test@example.com...."));
        assertFalse(isEmail("john.doe@example.com...."));
        assertFalse(isEmail("test@example....com."));
        assertFalse(isEmail("john.doe@example....com."));
        assertFalse(isEmail("test@example.com...."));
        assertFalse(isEmail("john.doe@example.com...."));
        assertFalse(isEmail("test@example....com.."));
        assertFalse(isEmail("john.doe@example....com.."));
        assertFalse(isEmail("0654"));
        assertFalse(isEmail("test"));
        assertFalse(isEmail("john.doe"));
        assertFalse(isEmail("test@"));
        assertFalse(isEmail("john.doe@"));
        assertFalse(isEmail("test@."));
        assertFalse(isEmail("john.doe@."));
        assertFalse(isEmail("test@.com"));
        assertFalse(isEmail("john.doe@.com"));
    }

    @Test
    void testNullEmail() {
        assertThrows(NullPointerException.class, () -> isEmail(null));
    }
}