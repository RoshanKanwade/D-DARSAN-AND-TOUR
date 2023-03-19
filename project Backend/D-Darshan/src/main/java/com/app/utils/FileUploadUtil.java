package com.app.utils;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import org.springframework.web.multipart.MultipartFile;

public class FileUploadUtil {
	public static void saveFile(String uploadDir, String fileName,
            String string) throws IOException {
Path uploadPath = Paths.get(uploadDir);

if (!Files.exists(uploadPath)) {
Files.createDirectories(uploadPath);
}

try () {
Path filePath = uploadPath.resolve(fileName);

} catch (IOException e) {
throw new IOException("Could not save file: " + fileName, e);
}
}

}





