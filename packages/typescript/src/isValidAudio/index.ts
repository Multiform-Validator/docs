import validateAllAudios from "./validateAllAudios";
import validateMp3 from "./validateMp3";
import validateWav from "./validateWav";

type AudioMimeType = "mp3" | "wav";

interface OptionsParams {
	exclude: AudioMimeType[];
}

const defaultOptionsParams: OptionsParams = {
	exclude: [],
};

/**
 * Checks if the given file buffer represents a valid audio file.
 *
 * @param fileBuffer - The buffer containing the file data.
 * @description - This function checks the magic numbers of the file buffer to determine if it is a valid audio file.
 * @param options - An object containing the options for the function.
 * @param options.exclude - An array of audio types to exclude from the validation.
 *
 * type AudioMimeType = "mp3" | "wav";
 *
 * @example - isValidAudio(fileBuffer, { exclude: ["wav"] });
 *
 * @returns A boolean indicating whether the file is a valid audio file.
 */
function isValidAudio(
	fileBuffer: Buffer,
	options = defaultOptionsParams,
): boolean {
	const excludedMimeTypes: AudioMimeType[] = options.exclude;

	if (excludedMimeTypes.length === 0) {
		return validateAllAudios(fileBuffer);
	}

	const listToValidate: AudioMimeType[] = ["mp3", "wav"];

	const filteredList: AudioMimeType[] = listToValidate.filter(
		(mimeType: AudioMimeType) => !excludedMimeTypes.includes(mimeType),
	);

	if (filteredList.length === 0) {
		return false;
	}

	const isMp3: boolean =
		filteredList.includes("mp3") && validateMp3(fileBuffer);

	const isWav: boolean =
		filteredList.includes("wav") && validateWav(fileBuffer);

	return isMp3 || isWav;
}
export default isValidAudio;
