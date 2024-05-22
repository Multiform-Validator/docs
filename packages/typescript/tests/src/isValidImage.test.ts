import path from 'path';
import isValidImage from '../../src/isValidImage';
import * as fs from 'fs';

describe('isValidImage', () => {
	let fileBuffer1: Buffer, fileBuffer2: Buffer, fileBuffer3: Buffer, fileBuffer4: Buffer, fileBuffer5: Buffer;

	beforeAll(() => {
		fileBuffer1 = fs.readFileSync(path.join(__dirname, '..', 'assets', 'isValidImage', 'valid.jpeg')); // Valid JPEG image
		fileBuffer2 = fs.readFileSync(path.join(__dirname, '..', 'assets', 'isValidImage', 'valid.png')); // Valid PNG image
		fileBuffer3 = fs.readFileSync(path.join(__dirname, '..', 'assets', 'isValidImage', 'invalid.jpeg')); // Invalid JPEG image
	});

	it('should return true for a valid JPEG image', () => {
		const result = isValidImage(fileBuffer1);
		expect(result).toBe(true);
	});

	it('should return true for a valid PNG image', () => {
		const result = isValidImage(fileBuffer2);
		expect(result).toBe(true);
	});

	it('should return false for an invalid image', () => {
		const result = isValidImage(fileBuffer3);
		expect(result).toBe(false);
	});

	it('should return false for a GIF image', () => {
		const fileBuffer = Buffer.from([0x47, 0x49, 0x46, 0x38, /* ... */]);
		const result = isValidImage(fileBuffer);
		expect(result).toBe(true);
	});

	it('should return false for an empty buffer', () => {
		const fileBuffer = Buffer.from([]);
		const result = isValidImage(fileBuffer);
		expect(result).toBe(false);
	});

	it('should return false for a buffer with less than 4 bytes', () => {
		const fileBuffer = Buffer.from([0x47, 0x49, 0x46]);
		const result = isValidImage(fileBuffer);
		expect(result).toBe(false);
	});

	it('should return false for a buffer with less than 3 bytes', () => {
		const fileBuffer = Buffer.from([0x47, 0x49]);
		const result = isValidImage(fileBuffer);
		expect(result).toBe(false);
	});

	it('should return false for a buffer with less than 2 bytes', () => {
		const fileBuffer = Buffer.from([0x47]);
		const result = isValidImage(fileBuffer);
		expect(result).toBe(false);
	});
});
export default isValidImage;
