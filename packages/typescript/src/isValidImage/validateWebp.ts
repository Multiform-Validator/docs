export default function validateWebp(fileBuffer: Buffer): boolean {
	const isWebp: boolean =
		fileBuffer[8] === 0x57 &&
		fileBuffer[9] === 0x45 &&
		fileBuffer[10] === 0x42 &&
		fileBuffer[11] === 0x50;

	return isWebp;
}
