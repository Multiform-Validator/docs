export default function validateMov(fileBuffer: Buffer): boolean {
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

	return isMov;
}
