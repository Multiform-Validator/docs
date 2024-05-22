interface OptionsParams {
	validateGif?: boolean;
	validateWebp?: boolean;
	validateBmp?: boolean;
	validateTiff?: boolean;
	validateSvg?: boolean;
	validateIco?: boolean;
	validatePng?: boolean;
	validateJpeg?: boolean;
	validateJpg?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultOptionsParams: OptionsParams = {
	validateGif: true,
	validateWebp: true,
	validateBmp: true,
	validateTiff: true,
	validateSvg: true,
	validateIco: true,
	validatePng: true,
	validateJpeg: true,
	validateJpg: true,
};

/**
 * Checks if the given file buffer represents a valid image.
 * @param fileBuffer - The buffer containing the file data.
 * @description - This function checks the magic numbers of the file buffer to determine if it is a valid image. Verifies if the file is a JPEG or PNG image.
 * @returns A boolean indicating whether the file is a valid image or not.
 */
function isValidImage(fileBuffer: Buffer): boolean {
	// Check magic numbers to determine the mimetype
	const isJpeg: boolean =
		fileBuffer[0] === 0xff && fileBuffer[1] === 0xd8 && fileBuffer[2] === 0xff;

	const isPng: boolean =
		fileBuffer[0] === 0x89 &&
		fileBuffer[1] === 0x50 &&
		fileBuffer[2] === 0x4e &&
		fileBuffer[3] === 0x47;

	const isGif: boolean =
		fileBuffer[0] == 0x47 &&
		fileBuffer[1] == 0x49 &&
		fileBuffer[2] == 0x46 &&
		fileBuffer[3] == 0x38;

	const isWebp: boolean =
		fileBuffer[8] === 0x57 &&
		fileBuffer[9] === 0x45 &&
		fileBuffer[10] === 0x42 &&
		fileBuffer[11] === 0x50;

	const isBmp: boolean = fileBuffer[0] === 0x42 && fileBuffer[1] === 0x4d;

	const isTiff: boolean =
		(fileBuffer[0] === 0x49 && fileBuffer[1] === 0x49) ||
		(fileBuffer[0] === 0x4d && fileBuffer[1] === 0x4d);

	const isSvg: boolean = fileBuffer[0] === 0x3c && fileBuffer[1] === 0x3f;

	const isIco: boolean =
		fileBuffer[0] === 0x00 && fileBuffer[1] === 0x00 && fileBuffer[2] === 0x01;

	return (
		isJpeg || isPng || isGif || isWebp || isBmp || isTiff || isSvg || isIco
	);
}

export default isValidImage;
