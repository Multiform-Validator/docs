import validateAllImages from "./validateAllImages";

type ImageMimeType =
	| "bmp"
	| "gif"
	| "ico"
	| "jpeg"
	| "png"
	| "svg"
	| "tiff"
	| "webp";

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
 * type ImageMimeType =
	| "bmp"
	| "gif"
	| "ico"
	| "jpeg"
	| "png"
	| "svg"
	| "tiff"
	| "webp";
 * @returns A boolean indicating whether the file is a valid image or not.
 */
export default function isValidImage(
	fileBuffer: Buffer,
	options = defaultOptionsParams,
): boolean {
	const excludedMimeTypes: ImageMimeType[] = options.exclude;

	const listToValidate: ImageMimeType[] = [
		"bmp",
		"gif",
		"ico",
		"jpeg",
		"png",
		"svg",
		"tiff",
		"webp",
	];

	if (excludedMimeTypes.length === 0) {
		return validateAllImages(fileBuffer);
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const filteredList: ImageMimeType[] = listToValidate.filter(
		(mimeType: ImageMimeType) => !excludedMimeTypes.includes(mimeType),
	);

	return false;
}
