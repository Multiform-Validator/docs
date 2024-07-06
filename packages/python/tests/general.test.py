import sys
import os

# Add the parent directory of "src" to the path to allow imports from there
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'src'))

from multiform_validator import cnpjIsValid, cpfIsValid, getOnlyEmail, identifyFlagCard, isCreditCardValid, isEmail, isValidImage, passwordStrengthTester, validateBRPhoneNumber
print('\n')
RED = '\033[91m'
GREEN = '\033[92m'
RESET = '\033[0m'

def tester():
    cnpjTrueValue = cnpjIsValid('11.444.777/0001-61')
    cnpjFalseValue = cnpjIsValid('11.444.777/0001-62')
    cpfTrueValue = cpfIsValid('123.456.789-09')
    cpfFalseValue = cpfIsValid('123.456.789-08')
    emailTrueValue = isEmail('john@email.com')
    emailFalseValue = isEmail('johnemail.com')
    emailOnlyValue = getOnlyEmail('dawdwwud waid wiu wdemail wadwad john@email.com awodi waodOWIawoD')
    cardFlagValue = identifyFlagCard('4111111111111111')
    cardTrueValue = isCreditCardValid('4111111111111111')
    cardFalseValue = isCreditCardValid('4111111111111112')
    passwordValue = passwordStrengthTester('123456')
    phoneTrueValue = validateBRPhoneNumber('(21) 91234-5678')
    phoneTrueValue2 = validateBRPhoneNumber('(11) 98765-4321')
    phoneFalseValue = validateBRPhoneNumber('(11) 1111-111')

    print(cpfTrueValue)
    print(cpfFalseValue)

    successTests = []
    failedTests = []

    print('Running tests...')

    print('\n Testing cnpjValidator...')
    if(cnpjTrueValue == {
        'isValid': True,
        'errorMsg': None
    } and cnpjFalseValue == {
        'isValid': False,
        'errorMsg': 'CNPJ is not valid'
    }):
        print(GREEN + 'cnpjValidator test passed' + RESET)
        successTests.append('cnpjValidator')
    else:
        print(RED + 'cnpjValidator test failed' + RESET)
        failedTests.append('cnpjValidator')

    print('\n Testing cpfValidator...')
    if(cpfTrueValue == {
        'isValid': True,
        'errorMsg': None
    } and cpfFalseValue == {
        'isValid': False,
        'errorMsg': 'CPF is not valid'
    }):
        print(GREEN + 'cpfValidator test passed' + RESET)
        successTests.append('cpfValidator')
    else:
        print(RED + 'cpfValidator test failed' + RESET)
        failedTests.append('cpfValidator')

    print('\n Testing isEmail...')    
    if(emailTrueValue == True and emailFalseValue == False):
        print(GREEN + 'isEmail test passed' + RESET)
        successTests.append('isEmail')
    else:
        print(RED + 'isEmail test failed' + RESET)
        failedTests.append('isEmail')

    print('\n Testing getOnlyEmail...')
    if(emailOnlyValue == 'john@email.com'):
        print(GREEN + 'getOnlyEmail test passed' + RESET)
        successTests.append('getOnlyEmail')
    else:
        print(RED + 'getOnlyEmail test failed' + RESET)
        failedTests.append('getOnlyEmail')

    print('\n Testing identifyFlagCard...')
    if(cardFlagValue == 'Visa'):
        print(GREEN + 'identifyFlagCard test passed' + RESET)
        successTests.append('identifyFlagCard')
    else:
        print(RED + 'identifyFlagCard test failed' + RESET)
        failedTests.append('identifyFlagCard')

    print('\n Testing isCreditCardValid...')
    if(cardTrueValue == True and cardFalseValue == False):
        print(GREEN + 'isCreditCardValid test passed' + RESET)
        successTests.append('isCreditCardValid')
    else:
        print(RED + 'isCreditCardValid test failed' + RESET)
        failedTests.append('isCreditCardValid')

    print('\n Testing passwordStrengthTester...')
    if(passwordValue == 'weak'):
        print(GREEN + 'passwordStrengthTester test passed' + RESET)
        successTests.append('passwordStrengthTester')
    else:
        print(RED + 'passwordStrengthTester test failed' + RESET)
        failedTests.append('passwordStrengthTester')

    print('\n Testing validateBRPhoneNumber...')
    if(phoneTrueValue == {
        'isValid': True,
        'errorMsg': None
    } and phoneTrueValue2 == {
        'isValid': True,
        'errorMsg': None
    } and phoneFalseValue == {
        'isValid': False,
        'errorMsg': 'Invalid phone number'
    }):
        print(GREEN + 'validateBRPhoneNumber test passed' + RESET)
        successTests.append('validateBRPhoneNumber')
    else:
        print(RED + 'validateBRPhoneNumber test failed' + RESET)
        failedTests.append('validateBRPhoneNumber')

    print('\n Testing isValidImage...')
    jpeg_buffer = bytes([0xff, 0xd8, 0xff])
    png_buffer = bytes([0x89, 0x50, 0x4e, 0x47])
    gif_buffer = bytes([0x47, 0x49, 0x46, 0x38])
    imageResult1 = isValidImage(jpeg_buffer)
    imageResult2 = isValidImage(png_buffer)
    imageResult3 = isValidImage(gif_buffer)

    if(imageResult1 == True and imageResult2 == True and imageResult3 == True):
        print(GREEN + 'isValidImage test passed' + RESET)
        successTests.append('isValidImage')
    else:
        print(RED + 'isValidImage test failed' + RESET)
        failedTests.append('isValidImage')

    print("\n")

    failed_count = len(failedTests)
    success_count = len(successTests)
    total_tests = failed_count + success_count

    if failed_count > 0:
        print(RED + 'Failed tests:', failedTests)
        print(GREEN + 'Success tests:', successTests)
        print(RESET + f'Total tests run: {total_tests}')
    else:
        print(GREEN + 'All tests passed' + RESET)
        print(f'Total tests run: {total_tests}')

tester()
print('\n')