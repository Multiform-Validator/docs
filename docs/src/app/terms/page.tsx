import MainBg from "@/components/MainBg";

import "@/css/infos.css";

export default function AboutPage() {
	return (
		<MainBg>
			<section>
				<h1>Terms and Conditions</h1>
				<p>
					Welcome to Gabriel Logan Web Services. By using this website, you
					agree to the following terms and conditions:
				</p>
				<p>
					- The content provided on this website is for general information
					purposes only, and we make no warranties or representations regarding
					its accuracy or completeness.
				</p>
				<p>
					- We use the &quot;multiform-validator&quot; library, licensed under
					the MIT License, to enhance form field validation. However, we are not
					responsible for its usage or any consequences resulting from
					third-party use of the library.
				</p>
				<p>
					- We do not collect any personal data through this website, and your
					privacy is important to us.
				</p>
				<p>- Unauthorized use of this website is strictly prohibited.</p>
				<p>
					- Your use of this website and any disputes arising are subject to the
					laws of [Your Country/Region].
				</p>
				<p className="last-p">
					Thank you for visiting our website and using our services. If you have
					any questions or concerns, please don&apos;t hesitate to contact us.
				</p>
			</section>
		</MainBg>
	);
}
