def isValidImage(file_buffer):
    # Check the magic numbers to determine the mimetype
    is_jpeg = file_buffer[0] == 0xff and file_buffer[1] == 0xd8 and file_buffer[2] == 0xff
    is_png = file_buffer[0] == 0x89 and file_buffer[1] == 0x50 and file_buffer[2] == 0x4e and file_buffer[3] == 0x47
    is_gif = file_buffer[0] == 0x47 and file_buffer[1] == 0x49 and file_buffer[2] == 0x46 and file_buffer[3] == 0x38

    return is_jpeg or is_png or is_gif

