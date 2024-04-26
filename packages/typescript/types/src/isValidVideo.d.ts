/// <reference types="node" />
/**
 * Checks if a given file buffer represents a valid video file.
 * @param fileBuffer - The buffer containing the file data.
 * @returns A boolean indicating whether the file is a valid video.
 */
declare function isValidVideo(fileBuffer: Buffer): boolean;
export default isValidVideo;
