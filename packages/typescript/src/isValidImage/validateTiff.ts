export default function validateTiff(fileBuffer: Buffer): boolean {
	const isTiff: boolean =
		(fileBuffer[0] === 0x49 && fileBuffer[1] === 0x49) ||
		(fileBuffer[0] === 0x4d && fileBuffer[1] === 0x4d);

	return isTiff;
}
