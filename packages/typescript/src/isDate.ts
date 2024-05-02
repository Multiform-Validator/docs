/**
 * @example isDate('2023-07-24'); // true
 * @example isDate('2023/07/24'); // true
 * @example isDate('24-07-2023'); // true
 * @example isDate('24/07/2023'); // true
 * @example isDate('July 24, 2023'); // true
 * @example isDate('2023-13-24'); // false (invalid month)
 * @example isDate('2023-07-40'); // false (invalid day)
 * @example isDate('2023-07'); // false (incomplete date)
 * @example isDate('Hello'); // false (not a valid date format)
 * @description Values have to be passed as a string
 */
function isDate(value: string): boolean {
	if (typeof value !== "string") {
		throw new TypeError("Input value must be a string.");
	}
	if (value.trim().length === 0) {
		throw new Error("Input value must not be an empty string.");
	}
	// Parse the value using the Date constructor
	const dateObject: Date = new Date(value);
	// Check if the parsed date is valid
	if (Number.isNaN(dateObject) || !(dateObject instanceof Date)) {
		return false;
	}
	// Check if the date string is in a valid format (e.g., 'YYYY-MM-DD', 'MM/DD/YYYY', 'MMMM D, YYYY')
	const dateStringRegex: RegExp =
		/^(?:\d{4}[-/]\d{2}[-/]\d{2}|\d{2}[-/]\d{2}[-/]\d{4}|[A-Za-z]+\s\d{1,2}, \d{4})$/;
	if (!dateStringRegex.test(value)) {
		return false;
	}
	// Additional checks for the month and day values
	const year: number = dateObject.getFullYear();
	const month: number = dateObject.getMonth() + 1; // Month is zero-based, so we add 1
	const day: number = dateObject.getDate();
	if (
		year < 1000 ||
		year > 9999 ||
		month < 1 ||
		month > 12 ||
		day < 1 ||
		day > 31
	) {
		return false;
	}
	return true;
}
export default isDate;
