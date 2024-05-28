import Link from "next/link";
import { usePathname } from "next/navigation";

import translation from "@/components/Internationalization";

export default function SidebarWrapper() {
	const t = (text: string) =>
		translation({ text, subject: "SidebarWrapperJs" });

	const path = usePathname();
	const basePath = "/documentation/js/functions";
	return (
		<ul className="p-2">
			<li
				className={`mb-6 mt-2 rounded p-2 text-center text-white ${path === "/documentation/js" && "bg-hoverLi"}`}
			>
				<Link className="font-light hover:font-medium" href="/documentation/js">
					{t("Documentation")}
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/home` && "bg-hoverLi"}`}
			>
				<Link className="font-extralight hover:font-normal" href="/">
					{t("Home")}
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/cnpjIsValid` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/cnpjIsValid`}
				>
					cnpjIsValid
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/cpfIsValid` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/cpfIsValid`}
				>
					cpfIsValid
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/getOnlyEmail` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/getOnlyEmail`}
				>
					getOnlyEmail
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/identifyFlagCard` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/identifyFlagCard`}
				>
					identifyFlagCard
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isAscii` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isAscii`}
				>
					isAscii
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isBase64` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isBase64`}
				>
					isBase64
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isCEP` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isCEP`}
				>
					isCEP
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isCreditCardValid` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isCreditCardValid`}
				>
					isCreditCardValid
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isDate` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isDate`}
				>
					isDate
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isDecimal` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isDecimal`}
				>
					isDecimal
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isEmail` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isEmail`}
				>
					isEmail
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isEmpty` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isEmpty`}
				>
					isEmpty
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isMACAddress` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isMACAddress`}
				>
					isMACAddress
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isMD5` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isMD5`}
				>
					isMD5
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isNumber`}
				>
					isNumber
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isPort` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isPort`}
				>
					isPort
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isPostalCode` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isPostalCode`}
				>
					isPostalCode
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isTime` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isTime`}
				>
					isTime
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isValidAudio` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isValidAudio`}
				>
					isValidAudio
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isValidImage` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isValidImage`}
				>
					isValidImage
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isValidPdf` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isValidPdf`}
				>
					isValidPdf
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isValidTxt` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isValidTxt`}
				>
					isValidTxt
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isValidVideo` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/isValidVideo`}
				>
					isValidVideo
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/passwordStrengthTester` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/passwordStrengthTester`}
				>
					passwordStrengthTester
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateBRPhoneNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validateBRPhoneNumber`}
				>
					validateBRPhoneNumber
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateEmail` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validateEmail`}
				>
					validateEmail
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateName` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validateName`}
				>
					validateName
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validatePassportNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validatePassportNumber`}
				>
					validatePassportNumber
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validatePassword` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validatePassword`}
				>
					validatePassword
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validatePhoneNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validatePhoneNumber`}
				>
					validatePhoneNumber
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateSurname` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validateSurname`}
				>
					validateSurname
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateTextarea` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validateTextarea`}
				>
					validateTextarea
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateUsername` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href={`${basePath}/validateUsername`}
				>
					validateUsername
				</Link>
			</li>
			<li
				className={`mb-4 rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateUSPhoneNumber` && "bg-hoverLi"}`}
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

// isValidPDF ATENCAO
