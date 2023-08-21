/**
 * @param {string} cardNumber
 * @example identifyFlagCard('6062 8226 8644 9791');
 * @example identifyFlagCard('6062822686449791');
 * @description Values have to be passed as a string
 * @returns {string} return flag name ex. Visa
 */
declare function identifyFlagCard(cardNumber: string): string;
export default identifyFlagCard;
