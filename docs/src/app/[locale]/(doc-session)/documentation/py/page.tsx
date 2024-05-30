import Image from "next/image";
import Link from "next/link";
import { setStaticParamsLocale } from "next-international/server";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { LocaleParams } from "@/app/[locale]/types/locale";
import { getScopedI18n } from "@/locales/server";

export default async function DocumentationPagePy({
	params: { locale },
}: LocaleParams) {
	setStaticParamsLocale(locale);

	const t = await getScopedI18n("DocumentationPython");

	return (
		<div className="min-h-screen bg-gray-800 p-6 text-white">
			<h1 className="mb-4 text-4xl font-bold">Python Doc</h1>
			<Link href={`/${locale}`} className="text-blue-500 hover:underline">
				{t("Back to home")}
			</Link>
			<p className="mb-6 mt-6 flex gap-2">
				<a href="https://badge.fury.io/py/multiform-validator" target="_blank">
					<Image
						width={0}
						height={0}
						className="h-auto w-auto"
						src="https://badge.fury.io/py/multiform-validator.svg"
						alt="pypi version"
					/>
				</a>
				<a href="https://opensource.org/licenses/MIT" target="_blank">
					<Image
						width={0}
						height={0}
						className="h-auto w-auto"
						src="https://img.shields.io/badge/License-MIT-yellow.svg"
						alt="License: MIT"
					/>
				</a>
				<a
					href="https://pypistats.org/packages/multiform-validator"
					target="_blank"
				>
					<Image
						width={0}
						height={0}
						className="h-auto w-auto"
						src="https://img.shields.io/pypi/dm/multiform-validator.svg?style=flat-square"
						alt="pypi downloads"
					/>
				</a>
			</p>
			<div className="mt-8">
				<h2 className="mb-2 text-3xl font-semibold">{t("Installation")}</h2>
				<p className="mb-2 text-lg">{t("Install the package using pip: ")}</p>
				<SyntaxHighlighter language="bash" style={a11yDark}>
					pip install multiform-validator
				</SyntaxHighlighter>

				<SyntaxHighlighter language="python" style={a11yDark}>
					{`from multiform_validator import (
	cnpjIsValid,
	cpfIsValid,
	getOnlyEmail,
	identifyFlagCard,
	isCreditCardValid,
	isEmail,
	passwordStrengthTester,
	validateBRPhoneNumber,
	isValidImage
)`}
				</SyntaxHighlighter>
			</div>
			<div className="mb-4 mt-8">
				<h1 className="mb-2 text-3xl font-semibold">{t("Methods")}</h1>
				<div className="mb-8">
					<h2 className="text-lg">isEmail: </h2>
					<SyntaxHighlighter language="python" style={a11yDark}>
						{`print("Is email", isEmail("foo@bar.com")) # True

print("Is not email", isEmail("foo@bar")) # False`}
					</SyntaxHighlighter>
				</div>
				<div className="mb-8">
					<h2 className="text-lg">getOnlyEmail: </h2>
					<SyntaxHighlighter language="python" style={a11yDark}>
						{`print("Get only email", getOnlyEmail("awdawd wadawd wda awd jhony@gmail.com awdawdawd"))
# jhony@gmail.com

print("Multiple emails", getOnlyEmail("dawd foo@bar.com adwda wdaw da @dadwa odiw jon@foob.com", True))
# ['foo@bar.com', 'jon@foob.com']

print("Multiple and cleanDomains", getOnlyEmail(
    """
    awawdi wadwad iu awd foor@bar.comAOWDowad wdaoiwdo @OIDOim2o2OID@AD@D@@@@D odi2 2oid2odi2D
    aodo2d@doaiaod jhon@bar.com.brADW
    """, True, True
)) # ['foor@bar.com', 'jhon@bar.com.br']

print("Multiple, clean and repeat emails", getOnlyEmail(
    """
    awawdi wadwad iu awd u awd foor@bar.comAOWDowad wda u
    2d@doaiaod jhon@bar.com.brADW
     awd foor@bar.comAOWDowad wda
    """, True, True, True
)) # ['foor@bar.com', 'jhon@bar.com.br', 'foor@bar.com']

# Each parameter can be passed as false individually, the default for all is false`}
					</SyntaxHighlighter>
				</div>
				<div className="mb-8">
					<h2 className="text-lg">identifyFlagCard: </h2>
					<SyntaxHighlighter language="python" style={a11yDark}>
						{`print("Identify flag card", identifyFlagCard("5117 2161 1334 8362")) # Mastercard`}
					</SyntaxHighlighter>
				</div>
				<div className="mb-8">
					<h2 className="text-lg">passwordStrengthTester: </h2>
					<SyntaxHighlighter language="python" style={a11yDark}>
						{`print("Password strength", passwordStrengthTester("aA1!asd@qd2asd")) # Very Strong`}
					</SyntaxHighlighter>
				</div>
				<div className="mb-8">
					<h2 className="text-lg">cpfIsValid: </h2>
					<SyntaxHighlighter language="python" style={a11yDark}>
						{`print("Is CPF valid", cpfIsValid("123.456.789-02")['isValid']) # False

print("Is CPF valid", cpfIsValid("123.456.789-09"))
# {'isValid': False, 'errorMsg': 'CNPJ is not valid'}`}
					</SyntaxHighlighter>
				</div>
				<div className="mb-8">
					<h2 className="text-lg">cnpjIsValid: </h2>
					<SyntaxHighlighter language="python" style={a11yDark}>
						{`print("Is CNPJ valid", cnpjIsValid("12.345.678/0001-09"))
# { 'isValid': False, 'errorMsg': 'CNPJ is not valid' }`}
					</SyntaxHighlighter>
				</div>
				<div className="mb-8">
					<h2 className="text-lg">isCreditCardValid: </h2>
					<SyntaxHighlighter language="python" style={a11yDark}>
						{`print("Is credit card valid", isCreditCardValid("5117 2161 1334 8362")) # True`}
					</SyntaxHighlighter>
				</div>
				<div className="mb-8">
					<h2 className="text-lg">isCreditCardValid: </h2>
					<SyntaxHighlighter language="python" style={a11yDark}>
						{`print("Is credit card valid", isCreditCardValid("5117 2161 1334 8362")) # True`}
					</SyntaxHighlighter>
				</div>
				<div className="mb-8">
					<h2 className="text-lg">validateBRPhoneNumber: </h2>
					<SyntaxHighlighter language="python" style={a11yDark}>
						{`print("Validate BR phone number", validateBRPhoneNumber("(11) 91234-5678"))
# { 'isValid': True, 'errorMsg': None }`}
					</SyntaxHighlighter>
				</div>
				<div className="mb-8">
					<h2 className="text-lg">isValidImage: </h2>
					<SyntaxHighlighter language="python" style={a11yDark}>
						{`import os
from pathlib import Path

from multiform_validator import isValidImage

# Resolve the file path
file_path = Path.cwd() / 'static' / 'uploads'
retrieved_file = file_path / filename

# Read the first 4 bytes of the file
with open(retrieved_file, 'rb') as f:
    file_buffer = f.read(4)

print(isValidImage(file_buffer)) # True or False`}
					</SyntaxHighlighter>
				</div>
			</div>
			<div>
				<h1 className="text-3xl font-semibold">{t("Functions signature")}</h1>
				<p>{t("All params with default values are optional.")}</p>
				<SyntaxHighlighter language="python" style={a11yDark}>
					{`def isEmail(email: str) -> bool:
    pass

def getOnlyEmail(text: str, multiple=False, clean_domain=False, repeat_email=False) -> str:
    pass

def passwordStrengthTester(password: str) -> str:
    pass

defaultErrorMsgCPF = [
  'CPF invalid',
  'CPF must have 11 numerical digits',
  'CPF is not valid',
  'Unknown error',
]
def cpfIsValid(cpf: str, errorMsg=defaultErrorMsgCPF) -> Dict[str, Union[bool, str, None]]:
    pass

default_error_msgCNPJ = [
   'CNPJ invalid',
   'CNPJ must have 14 numerical digits',
   'CNPJ is not valid',
   'Unknown error'
]
def cnpjIsValid(cnpj: str, errorMsg=default_error_msgCNPJ) -> Dict[str, Union[bool, str, None]]:
    pass

def isCreditCardValid(cardNumber: str) -> bool:
    pass

def identifyFlagCard(cardNumber: str) -> str:
    pass

default_error_msg = ['Invalid value passed', 'Invalid phone number', 'Unknown error']
def validateBRPhoneNumber(phoneNumber: str, errorMsg=default_error_msg) -> Dict[str, Union[bool, str, None]]:
    pass

def isValidImage(file_buffer: bytes) -> bool:
	pass`}
				</SyntaxHighlighter>
			</div>
		</div>
	);
}
