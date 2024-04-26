import isValidPdf from '../../src/isValidPdf';

describe('isValidPdf', () => {
	it('should return true for a valid PDF file', () => {
		// Create a buffer with the magic numbers of a PDF file
		const fileBuffer = Buffer.from([0x25, 0x50, 0x44, 0x46]);

		// Call the isValidPdf function
		const result = isValidPdf(fileBuffer);

		// Assert that the result is true
		expect(result).toBe(true);
	});

	it('should return false for an invalid file', () => {
		// Create a buffer with random data
		const fileBuffer = Buffer.from([0x12, 0x34, 0x56, 0x78]);

		// Call the isValidPdf function
		const result = isValidPdf(fileBuffer);

		// Assert that the result is false
		expect(result).toBe(false);
	});
});
export default isValidPdf;
