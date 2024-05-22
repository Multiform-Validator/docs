export default function validateBmp(fileBuffer: Buffer): boolean {
	const isBmp: boolean = fileBuffer[0] === 0x42 && fileBuffer[1] === 0x4d;

	return isBmp;
}
