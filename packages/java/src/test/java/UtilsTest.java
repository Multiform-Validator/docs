import io.github.gabriel_logan.multiform_validator.Utils;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;

import static org.junit.jupiter.api.Assertions.*;

class UtilsTest {
    @Test
    void testGetOnlyEmail() {
        // Test with no email found
        assertEquals("No email found", Utils.getOnlyEmail("This is a sample text", null));

        // Test with single email
        assertEquals("test@example.com", Utils.getOnlyEmail("This is a sample text with email test@example.com", null));

        // Test with multiple emails
        Utils.OptionsParams options1 = new Utils.OptionsParams();
        options1.multiple = true;
        assertEquals(
                new ArrayList<>(Arrays.asList("test1@example.com", "test2@example.com")),
                Utils.getOnlyEmail("This is a sample text with emails test1@example.com and test2@example.com", options1)
        );

        // Test with cleaning domain
        Utils.OptionsParams options = new Utils.OptionsParams();
        options.cleanDomain = true;
        assertEquals("test@example.com.br", Utils.getOnlyEmail("test@example.com.br", options));

        // Test with cleaning domain and multiple emails
        options.multiple = true;
        assertEquals(
                new ArrayList<>(Arrays.asList("test1@example.com.br", "test2@example.com.br")),
                Utils.getOnlyEmail("test1@example.com.br and test2@example.com.br", options)
        );

        // Test with repeatEmail set to false
        options.repeatEmail = false;
        assertEquals(Collections.singletonList("test@example.com"), Utils.getOnlyEmail("test@example.com and test@example.com", options));

        // Test with repeatEmail set to false and multiple emails
        options.multiple = true;
        assertEquals(
                new ArrayList<>(Collections.singletonList("test@example.com")),
                Utils.getOnlyEmail("test@example.com and test@example.com", options)
        );
    }
}