/**
 * @example isMACAddress('001A2B3C4D5E');
 * @example isMACAddress('00:1A:2B:3C:4D:5E');
 * @example isMACAddress('00-1A-2B-3C-4D-5E');
 * @description Values have to be passed as a string
 * @returns return true or false
 */
declare function isMACAddress(mac: string): boolean;
export default isMACAddress;
