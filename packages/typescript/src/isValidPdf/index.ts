/**
 * Checks if a given file buffer represents a valid PDF file.
 * @param fileBuffer - The buffer containing the file data.
 * @returns A boolean indicating whether the file is a valid PDF.
 */
function isValidPdf(fileBuffer: Buffer): boolean {
	// Check magic numbers to determine the mimetype
	const isPdf: boolean =
		fileBuffer[0] === 0x25 &&
		fileBuffer[1] === 0x50 &&
		fileBuffer[2] === 0x44 &&
		fileBuffer[3] === 0x46;
	return isPdf;
}
export default isValidPdf;
