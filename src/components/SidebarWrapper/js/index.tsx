"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useScopedI18n } from "@/locales/client";
import { JsFuncTypes } from "@/types/Functions/Javascript";
import { Locale } from "@/types/Locales";

export default function SidebarWrapper({ locale }: Locale) {
	const scopedT = useScopedI18n("SidebarWrapperJs");

	const path = usePathname();

	const compareToPath = locale === "en" ? "" : `/${locale}`;

	const basePath = `/documentation/js/functions`;

	const functions: JsFuncTypes[] = [
		"cnpjIsValid",
		"cpfIsValid",
		"getOnlyEmail",
		"identifyFlagCard",
		"isAscii",
		"isBase64",
		"isCEP",
		"isCreditCardValid",
		"isDate",
		"isDecimal",
		"isEmail",
		"isEmpty",
		"isMACAddress",
		"isMD5",
		"isNumber",
		"isPort",
		"isPostalCode",
		"isTime",
		"isValidAudio",
		"isValidImage",
		"isValidPdf",
		"isValidTxt",
		"isValidVideo",
		"passwordStrengthTester",
		"validateBRPhoneNumber",
		"validateEmail",
		"validateName",
		"validatePassportNumber",
		"validatePassword",
		"validatePhoneNumber",
		"validateSurname",
		"validateTextarea",
		"validateUsername",
		"validateUSPhoneNumber",
	];

	return (
		<ul className="p-2">
			<Link href="/documentation/js">
				<li
					className={`mb-6 mt-2 rounded p-2 text-center font-light text-white hover:font-medium ${path === `${compareToPath}/documentation/js` && "bg-hoverLi"}`}
				>
					{scopedT("Documentation")}
				</li>
			</Link>

			<Link href="/">
				<li
					className={`mb-1 rounded px-4 py-2 font-extralight text-white hover:bg-hoverLi hover:font-normal ${path === `${compareToPath}${basePath}/home` && "bg-hoverLi"}`}
				>
					{scopedT("Home")}
				</li>
			</Link>

			{functions.map((func: string, index: number) => {
				const isLastItem = index === functions.length - 1;
				const marginBottomClass = isLastItem ? "mb-4" : "mb-1";

				return (
					<Link key={func} href={`${basePath}/${func}`}>
						<li
							className={`${marginBottomClass} rounded px-4 py-2 font-extralight text-white hover:bg-hoverLi hover:font-normal ${path === `${compareToPath}${basePath}/${func}` && "bg-hoverLi"}`}
						>
							{func}
						</li>
					</Link>
				);
			})}
		</ul>
	);
}
