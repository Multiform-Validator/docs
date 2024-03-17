import fs from 'fs';
import isValidImage from '../../src/isValidImage';

jest.mock('fs');

// index.jpeg is a false image
// test.jpeg is a valid JPEG image
// test.png is a valid PNG image
// test.txt is a text file

describe('isValidImage', () => {
  it('should return true for valid JPEG images', () => {
    (fs.openSync as jest.Mock).mockReturnValue(1);
    (fs.readSync as jest.Mock).mockImplementation((fd: number, buffer: Buffer) => {
      buffer[0] = 0xff;
      buffer[1] = 0xd8;
      buffer[2] = 0xff;
    });

    expect(isValidImage('../test.jpeg')).toBe(true);
  });

  it('should return true for valid PNG images', () => {
    (fs.openSync as jest.Mock).mockReturnValue(1);
    (fs.readSync as jest.Mock).mockImplementation((fd: number, buffer: Buffer) => {
      buffer[0] = 0x89;
      buffer[1] = 0x50;
      buffer[2] = 0x4e;
      buffer[3] = 0x47;
    });

    expect(isValidImage('../test.png')).toBe(true);
  });

  it('should return false for invalid images', () => {
    (fs.openSync as jest.Mock).mockReturnValue(1);
    (fs.readSync as jest.Mock).mockImplementation((fd: number, buffer: Buffer) => {
      buffer[0] = 0x00;
      buffer[1] = 0x00;
      buffer[2] = 0x00;
      buffer[3] = 0x00;
    });

    expect(isValidImage('../test.txt')).toBe(false);
  });
});
