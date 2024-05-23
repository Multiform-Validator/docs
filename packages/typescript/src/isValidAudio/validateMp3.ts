export default function validateMp3(fileBuffer: Buffer): boolean {
	const isMp3: boolean =
		fileBuffer[0] === 0x49 && fileBuffer[1] === 0x44 && fileBuffer[2] === 0x33;

	return isMp3;
}
