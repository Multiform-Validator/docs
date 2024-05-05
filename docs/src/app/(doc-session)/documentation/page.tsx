import Image from "next/image";
import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import DrawerComponent from "@/components/Drawer";

export default function Documentation() {
	return (
		<section className="min-h-screen p-8">
			<div>
				{/**<!-- Page Content --> */}
				<div id="page-content-wrapper">
					<div className="mb-10 flex justify-around">
						<Link
							href="/"
							className="rounded bg-gray-700 px-4 py-2"
							id="menu-toggle"
						>
							Back to home page
						</Link>
						<DrawerComponent />
					</div>
					<div>
						<h1 className="text-3xl font-medium">Official documentation</h1>
						<p className="mt-4">
							Welcome to the main page of Multiform Validator! Here, you will
							find detailed documentation for various functions provided by
							Multiform Validator, a useful JavaScript library for data
							validation. Each function is designed to assist in validating
							different types of data, making your code more robust and secure.
							Multiform Validator consists of a series of specialized functions
							that allow you to validate various data types, such as emails,
							passwords, names, surnames, passport numbers, phone numbers, and
							more. Each function has configurable parameters and provides
							customizable error messages to suit your project&apos;s needs. On
							each documentation page, you will find a comprehensive description
							of the function, including its purpose, accepted parameters, and
							usage examples. Additionally, you will have access to details
							about default error messages and how to customize them to fit your
							application. By using Multiform Validator, you can ensure that
							user input in your forms is correct and compliant with the
							established rules. This validation is essential to prevent issues
							such as invalid entries, corrupted data, or security
							vulnerabilities. We are continuously working to enhance and expand
							Multiform Validator with new features and improvements to make it
							an even more powerful and flexible tool for your validation needs.
							We hope that these documentations prove to be helpful and simplify
							the usage of Multiform Validator in your projects. Feel free to
							explore the various available functions and do not hesitate to
							reach out to us if you have any questions or suggestions. Thank
							you for choosing Multiform Validator as your data validation tool,
							and we wish you success in your projects! Multiform Validator Team
						</p>
						<div id="examples_code" className="mt-8">
							<h1 className="mb-4 text-xl font-semibold">
								Multiform-validator
							</h1>

							<p className="mb-4 flex gap-2">
								<a
									href="https://badge.fury.io/js/multiform-validator.svg"
									target="_blank"
								>
									<Image
										width={0}
										height={0}
										className="h-auto w-auto"
										src="https://badge.fury.io/js/multiform-validator.svg"
										alt="npm version"
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
									href="https://npm-stat.com/charts.html?package=multiform-validator"
									target="_blank"
								>
									<Image
										width={0}
										height={0}
										className="h-auto w-auto"
										src="https://img.shields.io/npm/dm/multiform-validator.svg"
										alt="npm downloads"
									/>
								</a>
							</p>

							<p>
								This npm package provides JavaScript functions to validate
								various forms fields.
							</p>

							<p className="mb-4">
								If you want to help me, you can buy me a coffee (:
							</p>

							<p className="mb-4 flex justify-center">
								<Link
									href="https://www.buymeacoffee.com/gabriellogan"
									target="_blank"
								>
									<Image
										width={217}
										height={60}
										src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
										alt="Buy Me A Coffee"
									/>{" "}
								</Link>
							</p>

							<strong>
								<p className="mb-3">INFO: </p>
								<p className="mb-3">
									All functions that have the name &quot;validate&quot; return
									an object with two methods isValid: true|false and errorMsg:
									&apos;String with errors&apos;
								</p>
								<p className="mb-3">
									The remaining ones can return true|false|string|array, look at
									the doc for each one
								</p>
							</strong>

							<p className="mb-3">
								Feel free to find bugs and report them to me. Your feedback is
								highly appreciated. Hugs from Gabriel Logan!
							</p>

							<h2 className="text-lg font-medium">Installation</h2>

							<div className="">
								<SyntaxHighlighter
									customStyle={{
										textAlign: "center",
									}}
									language="bash"
									style={a11yDark}
								>
									npm install multiform-validator
								</SyntaxHighlighter>
							</div>

							<div className="">
								<SyntaxHighlighter
									customStyle={{
										textAlign: "center",
									}}
									language="bash"
									style={a11yDark}
								>
									yarn add multiform-validator
								</SyntaxHighlighter>
							</div>

							<h1 className="mb-3 text-2xl">Data Validator</h1>

							<p className="mb-3">
								This package contains various modules for validating different
								types of data. Below are the available validation modules:
							</p>

							<h3 className="mb-1 font-medium">Available Validation Modules</h3>

							<ul className="mb-5">
								<li className="ml-10 list-disc">
									<strong>cnpjValidator:</strong> CNPJ validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>cpfValidator:</strong> CPF validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>getOnlyEmail:</strong> Extracts only the email or
									emails address from a string.
								</li>
								<li className="ml-10 list-disc">
									<strong>identifyFlagCard:</strong> Identifies the flag of a
									credit card.
								</li>
								<li className="ml-10 list-disc">
									<strong>isAscii:</strong> Checks if the string contains only
									ASCII characters.
								</li>
								<li className="ml-10 list-disc">
									<strong>isBase64:</strong> Checks if the string is a valid
									Base64 encoding.
								</li>
								<li className="ml-10 list-disc">
									<strong>isCEP:</strong> CEP validation (Brazilian postal
									code).
								</li>
								<li className="ml-10 list-disc">
									<strong>isCreditCardValid:</strong> Credit card validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>isDate:</strong> Date format validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>isDecimal:</strong> Checks if the number is a decimal.
								</li>
								<li className="ml-10 list-disc">
									<strong>isEmail:</strong> Email address validation format.
								</li>
								<li className="ml-10 list-disc">
									<strong>isEmpty:</strong> Checks if the string is empty.
								</li>
								<li className="ml-10 list-disc">
									<strong>isMACAddress:</strong> MAC address validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>isMD5:</strong> Checks if the string is a valid MD5
									hash.
								</li>
								<li className="ml-10 list-disc">
									<strong>validatePassportNumber:</strong> Passport number
									validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>isPort:</strong> Port number validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>isPostalCode:</strong> Postal code validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>isTime:</strong> Time format validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>validateBRPhoneNumber:</strong> Brazilian phone number
									validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>validateEmail:</strong> Email address full validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>validatePassword:</strong> Password validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>validatePhoneNumber:</strong> Phone number validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>validateUsername:</strong> Username validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>validateUSPhoneNumber:</strong> US phone number
									validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>isNumber:</strong> Checks if the value is a number.
								</li>
								<li className="ml-10 list-disc">
									<strong>passwordStrengthTester:</strong> Password strength
									test.
								</li>
								<li className="ml-10 list-disc">
									<strong>validateName:</strong> Name validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>validateSurname:</strong> Surname validation.
								</li>
								<li className="ml-10 list-disc">
									<strong>validateTextarea:</strong> Textarea validation.
								</li>
							</ul>

							<p className="mb-3">if you prefer, you can use importing as:</p>

							<div>
								<SyntaxHighlighter language="javascript" style={a11yDark}>
									{`const validator = require('multiform-validator');
// or
import validator from 'multiform-validator';

Attention, FUNCTION_NAME is not a valid function name!
It is just an example of how to import the functions.

const { FUNCTION_NAME } = require('multiform-validator');
// or
import { FUNCTION_NAME } from 'multiform-validator';

/**
* There are other returns in some functions, with strings etc, stay tuned
*/`}
								</SyntaxHighlighter>
							</div>

							<p className="mb-4 mt-3">
								If you want to help me, you can buy me a coffee (:
							</p>

							<p className="mb-4 flex justify-center">
								<Link
									href="https://www.buymeacoffee.com/gabriellogan"
									target="_blank"
								>
									<Image
										width={217}
										height={60}
										src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
										alt="Buy Me A Coffee"
									/>{" "}
								</Link>
							</p>

							<p className="mb-4">
								Feel free to explore the various functions and experiment with
								different inputs to understand their behavior. If you encounter
								any issues or have suggestions, don&apos;t hesitate to reach out
								to me. Your feedback is valuable and helps improve the package.
								Happy coding!
							</p>

							<h2 className="mb-6">By - Gabriel Logan</h2>
						</div>
					</div>
				</div>
				{/**<!-- /#page-content-wrapper --> */}
			</div>
			{/**<!-- /#wrapper --> */}
		</section>
	);
}
