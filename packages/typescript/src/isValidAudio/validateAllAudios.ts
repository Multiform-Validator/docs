import validateMp3 from "./validateMp3";
import validateWav from "./validateWav";

export default function validateAllAudios(fileBuffer: Buffer): boolean {
	const isMp3: boolean = validateMp3(fileBuffer);

	const isWav: boolean = validateWav(fileBuffer);

	return isMp3 || isWav;
}
