export default function validateMkv(fileBuffer: Buffer): boolean {
	const isMkv: boolean =
		fileBuffer[0] === 0x1a &&
		fileBuffer[1] === 0x45 &&
		fileBuffer[2] === 0xdf &&
		fileBuffer[3] === 0xa3;

	return isMkv;
}
