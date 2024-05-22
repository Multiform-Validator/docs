import validateAllImages from "./validateAllImages";
import validateGif from "./validateGif";
import validateIco from "./validateIco";
import validateJpeg from "./validateJpeg";
import validatePng from "./validatePng";

type ImageMimeType = "gif" | "ico" | "jpeg" | "png";

interface OptionsParams {
	exclude: ImageMimeType[];
}

const defaultOptionsParams: OptionsParams = {
	exclude: [],
};

/**
 * Checks if the given file buffer represents a valid image.
 * @param fileBuffer - The buffer containing the file data.
 * @description - This function checks the magic numbers of the file buffer to determine if it is a valid image.
 * @param options - An object containing the options for the function.
 * @param options.exclude - An array of image types to exclude from the validation.
 *
 * type ImageMimeType = "gif" | "ico" | "jpeg" | "png";
 *
 * If you want to exclude some image types from the validation, you can pass the options
 * @example - isValidImage(fileBuffer, { exclude: ["gif", "ico"] });
 * @returns A boolean indicating whether the file is a valid image or not.
 */
export default function isValidImage(
	fileBuffer: Buffer,
	options = defaultOptionsParams,
): boolean {
	const excludedMimeTypes: ImageMimeType[] = options.exclude;

	if (excludedMimeTypes.length === 0) {
		return validateAllImages(fileBuffer);
	}

	const listToValidate: ImageMimeType[] = ["gif", "ico", "jpeg", "png"];

	const filteredList: ImageMimeType[] = listToValidate.filter(
		(mimeType: ImageMimeType) => !excludedMimeTypes.includes(mimeType),
	);

	if (filteredList.length === 0) {
		return false;
	}

	const isGif: boolean =
		filteredList.includes("gif") && validateGif(fileBuffer);

	const isIco: boolean =
		filteredList.includes("ico") && validateIco(fileBuffer);

	const isJpeg: boolean =
		filteredList.includes("jpeg") && validateJpeg(fileBuffer);

	const isPng: boolean =
		filteredList.includes("png") && validatePng(fileBuffer);

	return isGif || isIco || isJpeg || isPng;
}

/**
 * Validate
 * Bmp
 * Gif
 * Ico
 * Jpeg
 * Png
 * Svg
 * Tiff
 * Webp
 */
