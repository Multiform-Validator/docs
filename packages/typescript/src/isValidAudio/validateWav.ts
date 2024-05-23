export default function validateWav(fileBuffer: Buffer): boolean {
	const isWav: boolean =
		fileBuffer[0] === 0x52 &&
		fileBuffer[1] === 0x49 &&
		fileBuffer[2] === 0x46 &&
		fileBuffer[3] === 0x46;

	return isWav;
}
