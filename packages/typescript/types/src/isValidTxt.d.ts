/// <reference types="node" />
/**
 * Checks if a file buffer represents a valid text file.
 * @param fileBuffer - The buffer containing the file data.
 * @returns A boolean indicating whether the file is a valid text file.
 */
declare function isValidTxt(fileBuffer: Buffer): boolean;
export default isValidTxt;
