"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useScopedI18n } from "@/locales/client";
import { Locale } from "@/types/Locales";

export default function SidebarWrapper({ locale }: Locale) {
	const scopedT = useScopedI18n("SidebarWrapperJs");

	const path = usePathname();

	const basePath = `/documentation/js/functions`;
	return (
		<ul className="p-2">
			<li
				className={`mb-6 mt-2 rounded p-2 text-center text-white ${path === `/${locale}/documentation/js` && "bg-hoverLi"}`}
			>
				<Link className="font-light hover:font-medium" href="/documentation/js">
					{scopedT("Documentation")}
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/home` && "bg-hoverLi"}`}
			>
				<Link className="font-extralight hover:font-normal" href="/">
					{scopedT("Home")}
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/cnpjIsValid` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/cnpjIsValid`}
				>
					cnpjIsValid
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/cpfIsValid` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/cpfIsValid`}
				>
					cpfIsValid
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/getOnlyEmail` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/getOnlyEmail`}
				>
					getOnlyEmail
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/identifyFlagCard` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/identifyFlagCard`}
				>
					identifyFlagCard
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isAscii` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isAscii`}
				>
					isAscii
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isBase64` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isBase64`}
				>
					isBase64
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isCEP` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isCEP`}
				>
					isCEP
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isCreditCardValid` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isCreditCardValid`}
				>
					isCreditCardValid
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isDate` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isDate`}
				>
					isDate
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isDecimal` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isDecimal`}
				>
					isDecimal
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isEmail` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isEmail`}
				>
					isEmail
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isEmpty` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isEmpty`}
				>
					isEmpty
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isMACAddress` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isMACAddress`}
				>
					isMACAddress
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isMD5` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isMD5`}
				>
					isMD5
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isNumber`}
				>
					isNumber
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isPort` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isPort`}
				>
					isPort
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isPostalCode` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isPostalCode`}
				>
					isPostalCode
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isTime` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isTime`}
				>
					isTime
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isValidAudio` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isValidAudio`}
				>
					isValidAudio
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isValidImage` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isValidImage`}
				>
					isValidImage
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isValidPdf` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isValidPdf`}
				>
					isValidPdf
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isValidTxt` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isValidTxt`}
				>
					isValidTxt
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/isValidVideo` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isValidVideo`}
				>
					isValidVideo
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/passwordStrengthTester` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/passwordStrengthTester`}
				>
					passwordStrengthTester
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/validateBRPhoneNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validateBRPhoneNumber`}
				>
					validateBRPhoneNumber
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/validateEmail` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validateEmail`}
				>
					validateEmail
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/validateName` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validateName`}
				>
					validateName
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/validatePassportNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validatePassportNumber`}
				>
					validatePassportNumber
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/validatePassword` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validatePassword`}
				>
					validatePassword
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/validatePhoneNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validatePhoneNumber`}
				>
					validatePhoneNumber
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/validateSurname` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validateSurname`}
				>
					validateSurname
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/validateTextarea` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validateTextarea`}
				>
					validateTextarea
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/validateUsername` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validateUsername`}
				>
					validateUsername
				</Link>
			</li>
			<li
				className={`mb-4 rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `/${locale}${basePath}/validateUSPhoneNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validateUSPhoneNumber`}
				>
					validateUSPhoneNumber
				</Link>
			</li>
		</ul>
	);
}
