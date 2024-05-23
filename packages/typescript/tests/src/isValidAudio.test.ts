import isValidAudio from '../../src/isValidAudio';
import path from 'path';
import * as fs from 'fs';

describe('isValidAudio', () => {
	let fileBuffer1: Buffer, fileBuffer2: Buffer, fileBuffer3: Buffer, fileBuffer4: Buffer;

	beforeAll(() => {
		fileBuffer1 = fs.readFileSync(path.join(__dirname, '..', 'assets', 'isValidAudio', 'invalid', 'invalid.mp3')); // Invalid MP3 image
		fileBuffer2 = fs.readFileSync(path.join(__dirname, '..', 'assets', 'isValidAudio', 'invalid', 'invalid.wav')); // Invalid WAV image
		fileBuffer3 = fs.readFileSync(path.join(__dirname, '..', 'assets', 'isValidAudio', 'valid', 'valid.mp3')); // valid MP3 image
		fileBuffer4 = fs.readFileSync(path.join(__dirname, '..', 'assets', 'isValidAudio', 'valid', 'valid.wav')); // valid WAV image
	});

	it('should return false for an empty buffer', () => {
		const fileBuffer = Buffer.from([]);
		const result = isValidAudio(fileBuffer);
		expect(result).toBe(false);
	});

	it('should return false for an invalid MP3 audio', () => {
		const result = isValidAudio(fileBuffer1);
		expect(result).toBe(false);
	});

	it('should return false for an invalid WAV audio', () => {
		const result = isValidAudio(fileBuffer2);
		expect(result).toBe(false);
	});

	it('should return true for a valid MP3 audio', () => {
		const result = isValidAudio(fileBuffer3);
		expect(result).toBe(true);
	});

	it('should return true for a valid WAV audio', () => {
		const result = isValidAudio(fileBuffer4);
		expect(result).toBe(true);
	});

	it('should return false when excluding WAV files', () => {
		const result = isValidAudio(fileBuffer4, { exclude: ['wav'] });
		expect(result).toBe(false);
	});

	it('should return false when excluding MP3 files', () => {
		const result = isValidAudio(fileBuffer3, { exclude: ['mp3'] });
		expect(result).toBe(false);
	});

	it('should return true when excluding WAV files', () => {
		const result = isValidAudio(fileBuffer3, { exclude: ['wav'] });
		expect(result).toBe(true);
	});

	it('should return true when excluding MP3 files', () => {
		const result = isValidAudio(fileBuffer4, { exclude: ['mp3'] });
		expect(result).toBe(true);
	});

	it('should return false when excluding WAV files and MP3 files', () => {
		const result = isValidAudio(fileBuffer4, { exclude: ['wav', 'mp3'] });
		expect(result).toBe(false);
	});

	it('should return false when excluding WAV files and MP3 files', () => {
		const result = isValidAudio(fileBuffer3, { exclude: ['wav', 'mp3'] });
		expect(result).toBe(false);
	});

	it('should return false when excluding WAV files and MP3 files', () => {
		const result = isValidAudio(fileBuffer2, { exclude: ['wav', 'mp3'] });
		expect(result).toBe(false);
	});

	it('should return false when excluding WAV files and MP3 files', () => {
		const result = isValidAudio(fileBuffer1, { exclude: ['wav', 'mp3'] });
		expect(result).toBe(false);
	});
});
export default isValidAudio;
