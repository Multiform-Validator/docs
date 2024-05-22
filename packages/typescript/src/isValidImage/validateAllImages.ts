import validateGif from "./validateGif";
import validateIco from "./validateIco";
import validateJpeg from "./validateJpeg";
import validatePng from "./validatePng";

export default function validateAllImages(fileBuffer: Buffer): boolean {
	// Check magic numbers to determine the mimetype

	const isGif: boolean = validateGif(fileBuffer);

	const isIco: boolean = validateIco(fileBuffer);

	const isJpeg: boolean = validateJpeg(fileBuffer);

	const isPng: boolean = validatePng(fileBuffer);

	return isGif || isIco || isJpeg || isPng;
}
