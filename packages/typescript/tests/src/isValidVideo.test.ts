import isValidVideo from '../../src/isValidVideo';

describe('isValidVideo', () => {
	it('should return true for valid MP4 file', () => {
		const fileBuffer = Buffer.from([
			0x00, 0x00, 0x00, 0x20, 0x66, 0x74, 0x79, 0x70, 0x6d, 0x70, 0x34, 0x32
		]);
		expect(isValidVideo(fileBuffer)).toBe(true);
	});

	it('should return true for valid MOV file', () => {
		const fileBuffer = Buffer.from([
			0x00, 0x00, 0x00, 0x14, 0x66, 0x74, 0x79, 0x70, 0x71, 0x74, 0x20, 0x20
		]);
		expect(isValidVideo(fileBuffer)).toBe(true);
	});

	it('should return true for valid MKV file', () => {
		const fileBuffer = Buffer.from([
			0x1a, 0x45, 0xdf, 0xa3
		]);
		expect(isValidVideo(fileBuffer)).toBe(true);
	});

	it('should return false for invalid file', () => {
		const fileBuffer = Buffer.from([
			0x00, 0x00, 0x00, 0x00
		]);
		expect(isValidVideo(fileBuffer)).toBe(false);
	});
});
