export default function validateJpeg(fileBuffer: Buffer): boolean {
	const isJpeg: boolean =
		fileBuffer[0] === 0xff && fileBuffer[1] === 0xd8 && fileBuffer[2] === 0xff;

	return isJpeg;
}
