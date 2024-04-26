/**
 * Checks if a given file buffer represents a valid video file.
 * @param fileBuffer - The buffer containing the file data.
 * @returns A boolean indicating whether the file is a valid video.
 */
function isValidVideo(fileBuffer: Buffer): boolean {
	// Check magic numbers to determine the mimetype
	const isMp4: boolean =
		fileBuffer[0] === 0x00 &&
		fileBuffer[1] === 0x00 &&
		fileBuffer[2] === 0x00 &&
		fileBuffer[3] === 0x20 &&
		fileBuffer[4] === 0x66 &&
		fileBuffer[5] === 0x74 &&
		fileBuffer[6] === 0x79 &&
		fileBuffer[7] === 0x70 &&
		fileBuffer[8] === 0x6d &&
		fileBuffer[9] === 0x70 &&
		fileBuffer[10] === 0x34 &&
		fileBuffer[11] === 0x32;
	const isMov: boolean =
		fileBuffer[0] === 0x00 &&
		fileBuffer[1] === 0x00 &&
		fileBuffer[2] === 0x00 &&
		fileBuffer[3] === 0x14 &&
		fileBuffer[4] === 0x66 &&
		fileBuffer[5] === 0x74 &&
		fileBuffer[6] === 0x79 &&
		fileBuffer[7] === 0x70 &&
		fileBuffer[8] === 0x71 &&
		fileBuffer[9] === 0x74 &&
		fileBuffer[10] === 0x20 &&
		fileBuffer[11] === 0x20;
	const isMkv: boolean =
		fileBuffer[0] === 0x1a &&
		fileBuffer[1] === 0x45 &&
		fileBuffer[2] === 0xdf &&
		fileBuffer[3] === 0xa3;
	return isMp4 || isMov || isMkv;
}
export default isValidVideo;
