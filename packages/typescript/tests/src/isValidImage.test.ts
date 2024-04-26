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
});
export default isValidImage;
