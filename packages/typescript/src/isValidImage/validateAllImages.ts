import validateBmp from "./validateBmp";
import validateGif from "./validateGif";
import validateIco from "./validateIco";
import validateJpeg from "./validateJpeg";
import validatePng from "./validatePng";
import validateSvg from "./validateSvg";
import validateTiff from "./validateTiff";
import validateWebp from "./validateWebp";

export default function validateAllImages(fileBuffer: Buffer): boolean {
	// Check magic numbers to determine the mimetype

	const isBmp: boolean = validateBmp(fileBuffer);

	const isGif: boolean = validateGif(fileBuffer);

	const isIco: boolean = validateIco(fileBuffer);

	const isJpeg: boolean = validateJpeg(fileBuffer);

	const isPng: boolean = validatePng(fileBuffer);

	const isSvg: boolean = validateSvg(fileBuffer);

	const isTiff: boolean = validateTiff(fileBuffer);

	const isWebp: boolean = validateWebp(fileBuffer);

	return (
		isBmp || isGif || isIco || isJpeg || isPng || isSvg || isTiff || isWebp
	);
}
