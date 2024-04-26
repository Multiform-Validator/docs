/**
 * Checks if a file buffer represents a valid text file.
 * @param fileBuffer - The buffer containing the file data.
 * @returns A boolean indicating whether the file is a valid text file.
 */
function isValidTxt(fileBuffer: Buffer): boolean {
	// Check magic numbers to determine the mimetype
	const isTxt: boolean =
		fileBuffer[0] === 0x74 &&
		fileBuffer[1] === 0x65 &&
		fileBuffer[2] === 0x78 &&
		fileBuffer[3] === 0x74;
	return isTxt;
}
export default isValidTxt;
