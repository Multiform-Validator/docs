import MainBg from "@/components/MainBg";

import "@/css/infos.css";

export default function InfoPage() {
	return (
		<MainBg>
			<section id="info-section">
				<h1>multiform-validator - Multi Library for Form Field Validation</h1>
				<p>
					Introducing multiform-validator, a powerful Multi Library developed by
					Gabriel Logan. This versatile library is designed to validate numerous
					form fields, including email addresses, phone numbers, passwords, CPF
					(Brazilian individual taxpayer registry numbers), credit card numbers,
					and more.
				</p>
				<p>
					With multiform-validator, you can ensure that the data submitted
					through your forms is accurate and secure. Whether you&apos;re
					building a registration form, checkout process, or any data input
					system, this library has got you covered.
				</p>
				<p>
					The multiform-validator library comes with an extensive set of
					pre-built validation rules and customizable options. You can easily
					integrate it into your web applications and enjoy the benefits of
					client-side validation, reducing the number of invalid form
					submissions and enhancing the overall user experience.
				</p>
				<p>
					You can also use the multiform-validator to do validations in your
					backend, it works for any type of form validation or functions that
					use javascript, python, so feel free to use it
				</p>
				<p>
					What sets multiform-validator apart is its flexibility and ease of
					use. You can effortlessly apply validation rules to different form
					fields by simply adding a few lines of JavaScript code. Additionally,
					the library provides informative error messages, guiding users on how
					to correct their inputs, thereby reducing frustration and form
					abandonment rates.
				</p>
				<p>
					Gabriel Logan takes pride in developing the multiform-validator
					library with a focus on performance, efficiency, and reliability. The
					library is optimized for various browsers, ensuring seamless
					compatibility for your diverse audience.
				</p>
				<p className="last-p">
					So, if you&apos;re seeking a comprehensive solution for form field
					validation, look no further than multiform-validator. Embrace the
					power of this library, and rest assured that your data collection
					process will be streamlined, accurate, and secure.
				</p>
			</section>
		</MainBg>
	);
}
