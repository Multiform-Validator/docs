import fs from 'fs';

function isValidPdf(filePath: fs.PathLike): boolean {
	const buffer: Buffer = Buffer.alloc(4);
	const fd: number = fs.openSync(filePath, 'r');
	fs.readSync(fd, buffer, 0, 4, 0);
	fs.closeSync(fd);

	// Check magic numbers for PDF
	const isPdf: boolean =
		buffer[0] === 0x25 && buffer[1] === 0x50 && buffer[2] === 0x44 && buffer[3] === 0x46;

	return isPdf;
}

export default isValidPdf;
