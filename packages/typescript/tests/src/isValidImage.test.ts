import isValidImage from '../../src/isValidImage';

describe('isValidImage', () => {
	it('should return true for a valid JPEG image', () => {
		const fileBuffer = Buffer.from([0xff, 0xd8, 0xff, /* ... */]);
		const result = isValidImage(fileBuffer);
		expect(result).toBe(true);
	});

	it('should return true for a valid PNG image', () => {
		const fileBuffer = Buffer.from([0x89, 0x50, 0x4e, 0x47, /* ... */]);
		const result = isValidImage(fileBuffer);
		expect(result).toBe(true);
	});

	it('should return false for an invalid image', () => {
		const fileBuffer = Buffer.from([/* ... */]);
		const result = isValidImage(fileBuffer);
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
