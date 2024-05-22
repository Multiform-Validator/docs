import isValidPdf from '../../src/isValidPdf';
import path from 'path';
import * as fs from 'fs';

describe('isValidPdf', () => {
	let fileBuffer1: Buffer, fileBuffer2: Buffer;

	beforeAll(() => {
		fileBuffer1 = fs.readFileSync(path.join(__dirname, '..', 'assets', 'isValidPdf', 'invalid.pdf')); // Invalid PDF
		fileBuffer2 = fs.readFileSync(path.join(__dirname, '..', 'assets', 'isValidPdf', 'valid.pdf')); // Valid PDF
	});

	it('should return false for an empty buffer', () => {
		const fileBuffer = Buffer.from([]);
		const result = isValidPdf(fileBuffer);
		expect(result).toBe(false);
	});

	it('should return false for an invalid PDF', () => {
		const result = isValidPdf(fileBuffer1);
		expect(result).toBe(false);
	});

	it('should return true for a valid PDF', () => {
		const result = isValidPdf(fileBuffer2);
		expect(result).toBe(true);
	});
});
export default isValidPdf;
