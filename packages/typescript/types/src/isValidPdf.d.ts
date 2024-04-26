/// <reference types="node" />
/**
 * Checks if a given file buffer represents a valid PDF file.
 * @param fileBuffer - The buffer containing the file data.
 * @returns A boolean indicating whether the file is a valid PDF.
 */
declare function isValidPdf(fileBuffer: Buffer): boolean;
export default isValidPdf;
