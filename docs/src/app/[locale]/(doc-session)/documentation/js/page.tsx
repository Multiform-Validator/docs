import Image from "next/image";
import Link from "next/link";
import { setStaticParamsLocale } from "next-international/server";

import { LocaleParams } from "@/app/[locale]/types/locale";
import DrawerComponent from "@/components/Drawer";
import { getScopedI18n } from "@/locales/server";

import {
	Cdns,
	Installation,
	UsageCDNExample,
	UsageExample,
} from "./subComponents/MainPageSyntexHightlighter";

export default async function DocumentationPageJs({
	params: { locale },
}: LocaleParams) {
	setStaticParamsLocale(locale);

	const route = locale === "pt" ? "/pt" : "/";

	const t = await getScopedI18n("DocumentationJs");
	return (
		<section className="min-h-screen bg-drawer-bg p-8 dark:bg-drawer-bg-dark">
			<div>
				{/**<!-- Page Content --> */}
				<div id="page-content-wrapper">
					<div className="mb-10 flex justify-around">
						<Link
							href={route}
							className="rounded bg-gray-700 px-4 py-2 text-white"
							id="menu-toggle"
						>
							{t("Back to home page")}
						</Link>
						<DrawerComponent locale={locale} />
					</div>
					<div>
						<h1 className="text-3xl font-medium">
							{t("Official documentation")}
						</h1>
						<p className="mt-4">{t("Welcome Introduction Text")}</p>
						<div id="examples_code" className="mt-8">
							<h1 className="mb-4 text-2xl font-semibold">
								Multiform-validator
							</h1>

							<p className="mb-6 flex gap-2">
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
								{t(
									"This npm package provides JavaScript functions to validate various forms fields.",
								)}
							</p>

							<p className="mb-4">
								{t("If you want to help me, you can buy me a coffee (:")}
							</p>

							<p className="mb-6 mt-4 flex h-12 w-52">
								<Link
									href="https://www.buymeacoffee.com/gabriellogan"
									target="_blank"
								>
									<Image
										width={217}
										height={60}
										className="h-auto w-auto"
										src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
										alt="Buy Me A Coffee"
									/>{" "}
								</Link>
							</p>

							<strong>
								<p className="mb-3">{t("INFO: ")}</p>
								<p className="mb-3">{t("FirstInfoText")}</p>
								<p className="mb-3">{t("SecondInfoText")}</p>
							</strong>

							<p className="mb-3">{t("Feel free to find bugs Text Msg")} </p>

							<h2 className="mb-2 mt-4 text-lg font-medium">CDN&apos;s</h2>

							<div className="mb-8">
								<Cdns />
							</div>

							<h2 className="mb-2 mt-4 text-lg font-medium">
								{t("Example of use with CDN")}
							</h2>

							<div className="mb-8">
								<UsageCDNExample />
							</div>

							<h2 className="text-lg font-medium">{t("Installation")}</h2>

							<Installation />

							<h1 className="mb-3 text-2xl">{t("Data Validator")}</h1>

							<p className="mb-3">
								{t(
									"This package contains various modules for validating different types of data. Below are the available validation modules:",
								)}
							</p>

							<h3 className="mb-1 text-start font-medium">
								{t("Available Validation Modules")}
							</h3>

							<ul className="mb-5 text-start">
								<li className="mb-1 ml-10 list-disc">
									<strong>cnpjValidator:</strong> CNPJ validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>cpfValidator:</strong> CPF validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>getOnlyEmail:</strong> Extracts only the email or
									emails address from a string.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>identifyFlagCard:</strong> Identifies the flag of a
									credit card.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isAscii:</strong> Checks if the string contains only
									ASCII characters.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isBase64:</strong> Checks if the string is a valid
									Base64 encoding.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isCEP:</strong> CEP validation (Brazilian postal
									code).
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isCreditCardValid:</strong> Credit card validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isDate:</strong> Date format validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isDecimal:</strong> Checks if the number is a decimal.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isEmail:</strong> Email address validation format.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isEmpty:</strong> Checks if the string is empty.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isMACAddress:</strong> MAC address validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isMD5:</strong> Checks if the string is a valid MD5
									hash.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isNumber:</strong> Checks if the value is a number.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isPort:</strong> Port number validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isPostalCode:</strong> Postal code validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isTime:</strong> Time format validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isValidAudio</strong> Audio file validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isValidImage</strong> Image file validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isValidPdf</strong> Pdf file validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isValidTxt</strong> Txt file validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>isValidVideo</strong> Video file validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>passwordStrengthTester:</strong> Password strength
									test.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>validateBRPhoneNumber:</strong> Brazilian phone number
									validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>validateEmail:</strong> Email address full validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>validateName:</strong> Name validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>validatePassportNumber:</strong> Passport number
									validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>validatePassword:</strong> Password validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>validatePhoneNumber:</strong> Phone number validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>validateSurname:</strong> Surname validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>validateTextarea:</strong> Textarea validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>validateUsername:</strong> Username validation.
								</li>
								<li className="mb-1 ml-10 list-disc">
									<strong>validateUSPhoneNumber:</strong> US phone number
									validation.
								</li>
							</ul>

							<p className="mb-3">
								{t("if you prefer, you can use importing as:")}
							</p>

							<div className="p-2">
								<UsageExample />
							</div>

							<p className="mb-4 mt-3">
								{t("If you want to help me, you can buy me a coffee (:")}
							</p>

							<p className="mb-6 mt-2 flex h-12 w-52">
								<Link
									href="https://www.buymeacoffee.com/gabriellogan"
									target="_blank"
								>
									<Image
										width={217}
										height={60}
										className="h-auto w-auto"
										src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
										alt="Buy Me A Coffee"
									/>{" "}
								</Link>
							</p>

							<p className="mb-4">{t("Feel free to explore msg")}</p>

							<h2 className="mb-6">{t("By - Gabriel Logan")}</h2>
						</div>
					</div>
				</div>
				{/**<!-- /#page-content-wrapper --> */}
			</div>
			{/**<!-- /#wrapper --> */}
		</section>
	);
}
