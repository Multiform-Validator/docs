/**
 * Checks if a file buffer represents a valid text file.
 * @param fileBuffer - The buffer containing the file data.
 * @returns A boolean indicating whether the file is a valid text file.
 */
export default function isValidTxt(fileBuffer: Buffer): boolean {
	if (fileBuffer.length === 0) {
		return false;
	}
	for (let i: number = 0; i < fileBuffer.length; i++) {
		if (
			(fileBuffer[i] < 0x20 || fileBuffer[i] > 0x7e) &&
			fileBuffer[i] !== 0x0a &&
			fileBuffer[i] !== 0x0d
		) {
			return false;
		}
	}
	return true;
}
