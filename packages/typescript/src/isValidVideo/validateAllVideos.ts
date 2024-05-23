import validateMkv from "./validateMkv";
import validateMov from "./validateMov";
import validateMp4 from "./validateMp4";

export default function validateAllVideos(fileBuffer: Buffer): boolean {
	const isMp4: boolean = validateMp4(fileBuffer);

	const isMov: boolean = validateMov(fileBuffer);

	const isMkv: boolean = validateMkv(fileBuffer);

	return isMp4 || isMov || isMkv;
}
