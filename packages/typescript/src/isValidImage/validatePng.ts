export default function validatePng(fileBuffer: Buffer): boolean {
	const isPng: boolean =
		fileBuffer[0] === 0x89 &&
		fileBuffer[1] === 0x50 &&
		fileBuffer[2] === 0x4e &&
		fileBuffer[3] === 0x47;

	return isPng;
}
