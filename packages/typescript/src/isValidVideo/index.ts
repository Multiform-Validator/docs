import validateAllVideos from "./validateAllVideos";
import validateMkv from "./validateMkv";
import validateMov from "./validateMov";
import validateMp4 from "./validateMp4";

type VideoMimeType = "mkv" | "mov" | "mp4";

interface OptionsParams {
	exclude: VideoMimeType[];
}

const defaultOptionsParams: OptionsParams = {
	exclude: [],
};

/**
 * Checks if a given file buffer represents a valid video file.
 * @param fileBuffer - The buffer containing the file data.
 * @description This function checks the magic numbers of the file buffer to determine if it is a valid video.
 * @param options - An object containing the options for the function.
 * @param options.exclude - An array of video types to exclude from the validation.
 *
 * type VideoMimeType = "mkv" | "mov" | "mp4";
 *
 * If you want to exclude some video types from the validation, you can pass the options
 * @example - isValidVideo(fileBuffer, { exclude: ["mov", "mkv"] });
 * @returns A boolean indicating whether the file is a valid video.
 */
function isValidVideo(
	fileBuffer: Buffer,
	options = defaultOptionsParams,
): boolean {
	const excludedMimeTypes: VideoMimeType[] = options.exclude;

	if (excludedMimeTypes.length === 0) {
		return validateAllVideos(fileBuffer);
	}

	const listToValidate: VideoMimeType[] = ["mkv", "mov", "mp4"];

	const filteredList: VideoMimeType[] = listToValidate.filter(
		(mimeType: VideoMimeType) => !excludedMimeTypes.includes(mimeType),
	);

	if (filteredList.length === 0) {
		return false;
	}

	const isMkv: boolean =
		filteredList.includes("mkv") && validateMkv(fileBuffer);

	const isMov: boolean =
		filteredList.includes("mov") && validateMov(fileBuffer);

	const isMp4: boolean =
		filteredList.includes("mp4") && validateMp4(fileBuffer);

	return isMkv || isMov || isMp4;
}
export default isValidVideo;
