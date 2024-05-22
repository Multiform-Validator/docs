export default function validateSvg(fileBuffer: Buffer): boolean {
	const isSvg: boolean = fileBuffer[0] === 0x3c && fileBuffer[1] === 0x3f;

	return isSvg;
}
