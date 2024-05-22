export default function validateGif(fileBuffer: Buffer): boolean {
	const isGif: boolean =
		fileBuffer[0] == 0x47 &&
		fileBuffer[1] == 0x49 &&
		fileBuffer[2] == 0x46 &&
		fileBuffer[3] == 0x38;

	return isGif;
}
