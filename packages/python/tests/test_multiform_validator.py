import sys
import os
import unittest

# Add the parent directory of "src" to the path to allow imports from there
module_path = os.path.join(os.path.dirname(__file__), '..', 'src')
sys.path.append(module_path)

from multiform_validator import (
    cnpjIsValid, cpfIsValid, getOnlyEmail, identifyFlagCard, 
    isCreditCardValid, isEmail, isValidImage, passwordStrengthTester, 
    validateBRPhoneNumber
)

class TestMultiformValidator(unittest.TestCase):
    def test_cnpjIsValid(self):
        self.assertEqual(cnpjIsValid('11.444.777/0001-61'), {'isValid': True, 'errorMsg': None})
        self.assertEqual(cnpjIsValid('11.444.777/0001-62'), {'isValid': False, 'errorMsg': 'CNPJ is not valid'})

    def test_cpfIsValid(self):
        self.assertEqual(cpfIsValid('123.456.789-09'), {'isValid': True, 'errorMsg': None})
        self.assertEqual(cpfIsValid('123.456.789-08'), {'isValid': False, 'errorMsg': 'CPF is not valid'})

    def test_isEmail(self):
        self.assertTrue(isEmail('john@email.com'))
        self.assertFalse(isEmail('johnemail.com'))

    def test_getOnlyEmail(self):
        self.assertEqual(getOnlyEmail('dawdwwud waid wiu wdemail wadwad john@email.com awodi waodOWIawoD'), 'john@email.com')

    def test_identifyFlagCard(self):
        self.assertEqual(identifyFlagCard('4111111111111111'), 'Visa')

    def test_isCreditCardValid(self):
        self.assertTrue(isCreditCardValid('4111111111111111'))
        self.assertFalse(isCreditCardValid('4111111111111112'))

    def test_passwordStrengthTester(self):
        self.assertEqual(passwordStrengthTester('123456'), 'weak')

    def test_validateBRPhoneNumber(self):
        self.assertEqual(validateBRPhoneNumber('(21) 91234-5678'), {'isValid': True, 'errorMsg': None})
        self.assertEqual(validateBRPhoneNumber('(11) 98765-4321'), {'isValid': True, 'errorMsg': None})
        self.assertEqual(validateBRPhoneNumber('(11) 1111-111'), {'isValid': False, 'errorMsg': 'Invalid phone number'})

    def test_isValidImage(self):
        jpeg_buffer = bytes([0xff, 0xd8, 0xff])
        png_buffer = bytes([0x89, 0x50, 0x4e, 0x47])
        gif_buffer = bytes([0x47, 0x49, 0x46, 0x38])
        self.assertTrue(isValidImage(jpeg_buffer))
        self.assertTrue(isValidImage(png_buffer))
        self.assertTrue(isValidImage(gif_buffer))

if __name__ == '__main__':
    unittest.main()