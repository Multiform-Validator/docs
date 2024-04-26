/// <reference types="node" />
/**
 * Checks if the given file buffer represents a valid audio file.
 *
 * @param fileBuffer - The buffer containing the file data.
 * @returns A boolean indicating whether the file is a valid audio file.
 */
declare function isValidAudio(fileBuffer: Buffer): boolean;
export default isValidAudio;
