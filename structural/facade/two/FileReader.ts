import fs from "fs";
import path from "path";

export class FileReader {
  public readFile(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      fs.readFile(path.resolve(filePath), "utf-8", (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}
