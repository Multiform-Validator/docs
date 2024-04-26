/**
 * Checks if the given file buffer represents a valid image.
 * @param fileBuffer - The buffer containing the file data.
 * @description - This function checks the magic numbers of the file buffer to determine if it is a valid image. Verifies if the file is a JPEG or PNG image.
 * @returns A boolean indicating whether the file is a valid image or not.
 */
function isValidImage(fileBuffer: Buffer): boolean {
	// Check magic numbers to determine the mimetype
	const isJpeg: boolean =
		fileBuffer[0] === 0xff && fileBuffer[1] === 0xd8 && fileBuffer[2] === 0xff;
	const isPng: boolean =
		fileBuffer[0] === 0x89 &&
		fileBuffer[1] === 0x50 &&
		fileBuffer[2] === 0x4e &&
		fileBuffer[3] === 0x47;

	return isJpeg || isPng;
}

export default isValidImage;
