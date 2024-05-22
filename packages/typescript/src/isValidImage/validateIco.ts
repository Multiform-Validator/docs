export default function validateIco(fileBuffer: Buffer): boolean {
	const isIco: boolean =
		fileBuffer[0] === 0x00 && fileBuffer[1] === 0x00 && fileBuffer[2] === 0x01;

	return isIco;
}
