import Link from "next/link";

export default function SidebarWrapper() {
	return (
		<ul className="p-2">
			<li className="mb-8 mt-4 text-center text-white">
				<Link className="font-light hover:font-medium" href="/documentation">
					Documentation
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link className="font-extralight hover:font-normal" href="/">
					Home
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/cnpjIsValid"
				>
					cnpjIsValid
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/cpfIsValid"
				>
					cpfIsValid
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isEmail"
				>
					isEmail
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateEmail"
				>
					validateEmail
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isCEP"
				>
					isCEP
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateUsername"
				>
					validateUsername
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validatePassword"
				>
					validatePassword
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/getOnlyEmail"
				>
					getOnlyEmail
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isCreditCardValid"
				>
					isCreditCardValid
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/identifyFlagCard"
				>
					identifyFlagCard
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isMACAddress"
				>
					isMACAddress
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isAscii"
				>
					isAscii
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isBase64"
				>
					isBase64
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isDate"
				>
					isDate
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isDecimal"
				>
					isDecimal
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isEmpty"
				>
					isEmpty
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isMD5"
				>
					isMD5
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isPort"
				>
					isPort
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isPostalCode"
				>
					isPostalCode
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isTime"
				>
					isTime
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validatePassportNumber"
				>
					validatePassportNumber
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateBRPhoneNumber"
				>
					validateBRPhoneNumber
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateUSPhoneNumber"
				>
					validateUSPhoneNumber
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validatePhoneNumber"
				>
					validatePhoneNumber
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isNumber"
				>
					isNumber
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/passwordStrengthTester"
				>
					passwordStrengthTester
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateName"
				>
					validateName
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateSurname"
				>
					validateSurname
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/validateTextarea"
				>
					validateTextarea
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isValidImage"
				>
					isValidImage
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isValidAudio"
				>
					isValidAudio
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isValidVideo"
				>
					isValidVideo
				</Link>
			</li>
			<li className="rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isValidTxt"
				>
					isValidTxt
				</Link>
			</li>
			<li className="mb-4 rounded px-4 py-2 text-white hover:bg-hoverLi">
				<Link
					className="font-extralight hover:font-normal"
					href="/functions/isValidPdf"
				>
					isValidPdf
				</Link>
			</li>
		</ul>
	);
}
