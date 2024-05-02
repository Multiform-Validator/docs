/**
 * Checks if the given file buffer represents a valid audio file.
 *
 * @param fileBuffer - The buffer containing the file data.
 * @returns A boolean indicating whether the file is a valid audio file.
 */
function isValidAudio(fileBuffer: Buffer): boolean {
	// Check magic numbers to determine the mimetype
	const isMp3: boolean =
		fileBuffer[0] === 0x49 && fileBuffer[1] === 0x44 && fileBuffer[2] === 0x33;

	const isWav: boolean =
		fileBuffer[0] === 0x52 &&
		fileBuffer[1] === 0x49 &&
		fileBuffer[2] === 0x46 &&
		fileBuffer[3] === 0x46;
	return isMp3 || isWav;
}
export default isValidAudio;
