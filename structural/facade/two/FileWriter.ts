import fs from "fs";
import path from "path";

export class FileWriter {
  public writeFile(filePath: string, content: string): Promise<void> {
    return new Promise((resolve, reject) => {
      fs.writeFile(path.resolve(filePath), content, "utf-8", (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}
