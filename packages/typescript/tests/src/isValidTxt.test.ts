import isValidTxt from '../../src/isValidTxt';

describe('isValidTxt', () => {
	it('should return true for a valid text file', () => {
		const fileBuffer = Buffer.from('text file content');
		const result = isValidTxt(fileBuffer);
		expect(result).toBe(true);
	});

	it('should return false for an invalid text file', () => {
		const fileBuffer = Buffer.from('binary file content');
		const result = isValidTxt(fileBuffer);
		expect(result).toBe(false);
	});
});
