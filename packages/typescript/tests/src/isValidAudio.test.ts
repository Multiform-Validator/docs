import isValidAudio from '../../src/isValidAudio';

describe('isValidAudio', () => {
	it('should return true for valid MP3 file', () => {
		const fileBuffer = Buffer.from([0x49, 0x44, 0x33]);
		expect(isValidAudio(fileBuffer)).toBe(true);
	});

	it('should return true for valid WAV file', () => {
		const fileBuffer = Buffer.from([0x52, 0x49, 0x46, 0x46]);
		expect(isValidAudio(fileBuffer)).toBe(true);
	});

	it('should return false for invalid file', () => {
		const fileBuffer = Buffer.from([0x00, 0x00, 0x00, 0x00]);
		expect(isValidAudio(fileBuffer)).toBe(false);
	});
});
export default isValidAudio;
