import fs from 'fs';

function isValidImage(filePath: fs.PathLike): boolean {
	const buffer: Buffer = Buffer.alloc(4);
	const fd: number = fs.openSync(filePath, 'r');
	fs.readSync(fd, buffer, 0, 4, 0);
	fs.closeSync(fd);

	// Check magic numbers to determine the mimetype
	const isJpeg: boolean = buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
	const isPng: boolean =
		buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4e && buffer[3] === 0x47;

	return isJpeg || isPng;
}

export default isValidImage;
