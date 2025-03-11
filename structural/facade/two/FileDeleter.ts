import fs from "fs";
import path from "path";

export class FileDeleter {
  public deleteFile(filePath: string): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.unlink(path.resolve(filePath), (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
