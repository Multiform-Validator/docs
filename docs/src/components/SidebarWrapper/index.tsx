import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarWrapper() {
	const path = usePathname();
	const basePath = "/functions";
	return (
		<ul className="p-2">
			<li
				className={`mb-6 mt-2 rounded p-2 text-center text-white ${path === "/documentation" && "bg-hoverLi"}`}
			>
				<Link className="font-light hover:font-medium" href="/documentation">
					Documentation
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/home` && "bg-hoverLi"}`}
			>
				<Link className="font-extralight hover:font-normal" href="/">
					Home
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/cnpjIsValid` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/cnpjIsValid"
				>
					cnpjIsValid
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/cpfIsValid` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/cpfIsValid"
				>
					cpfIsValid
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/getOnlyEmail` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/getOnlyEmail"
				>
					getOnlyEmail
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/identifyFlagCard` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/identifyFlagCard"
				>
					identifyFlagCard
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isAscii` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isAscii"
				>
					isAscii
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isBase64` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isBase64"
				>
					isBase64
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isCEP` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isCEP"
				>
					isCEP
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isCreditCardValid` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isCreditCardValid"
				>
					isCreditCardValid
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isDate` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isDate"
				>
					isDate
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isDecimal` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isDecimal"
				>
					isDecimal
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isEmail` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isEmail"
				>
					isEmail
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isEmpty` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isEmpty"
				>
					isEmpty
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isMACAddress` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isMACAddress"
				>
					isMACAddress
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isMD5` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isMD5"
				>
					isMD5
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isNumber"
				>
					isNumber
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isPort` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isPort"
				>
					isPort
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isPostalCode` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isPostalCode"
				>
					isPostalCode
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isTime` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isTime"
				>
					isTime
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isValidAudio` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isValidAudio"
				>
					isValidAudio
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isValidImage` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isValidImage"
				>
					isValidImage
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isValidPdf` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isValidPdf"
				>
					isValidPdf
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isValidTxt` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isValidTxt"
				>
					isValidTxt
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/isValidVideo` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isValidVideo"
				>
					isValidVideo
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/passwordStrengthTester` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/passwordStrengthTester"
				>
					passwordStrengthTester
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateBRPhoneNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateBRPhoneNumber"
				>
					validateBRPhoneNumber
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateEmail` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateEmail"
				>
					validateEmail
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateName` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateName"
				>
					validateName
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validatePassportNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validatePassportNumber"
				>
					validatePassportNumber
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validatePassword` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validatePassword"
				>
					validatePassword
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validatePhoneNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validatePhoneNumber"
				>
					validatePhoneNumber
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateSurname` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateSurname"
				>
					validateSurname
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateTextarea` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateTextarea"
				>
					validateTextarea
				</Link>
			</li>
			<li
				className={`rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateUsername` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateUsername"
				>
					validateUsername
				</Link>
			</li>
			<li
				className={`mb-4 rounded px-4 py-2 text-white hover:bg-hoverLi ${path === `${basePath}/validateUSPhoneNumber` && "bg-hoverLi"}`}
			>
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateUSPhoneNumber"
				>
					validateUSPhoneNumber
				</Link>
			</li>
		</ul>
	);
}

// isValidPDF ATENCAO
