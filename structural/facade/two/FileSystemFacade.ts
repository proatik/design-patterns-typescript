import { FileReader } from "./FileReader";
import { FileWriter } from "./FileWriter";
import { FileDeleter } from "./FileDeleter";

export class FileSystemFacade {
  private fileReader: FileReader;
  private fileWriter: FileWriter;
  private fileDeleter: FileDeleter;

  constructor() {
    this.fileReader = new FileReader();
    this.fileWriter = new FileWriter();
    this.fileDeleter = new FileDeleter();
  }

  public async readFile(filePath: string): Promise<string | null> {
    try {
      return await this.fileReader.readFile(filePath);
    } catch (e) {
      console.error("Error reading file:", e.message);
      return null;
    }
  }

  public async writeFile(filePath: string, content: string): Promise<boolean> {
    try {
      await this.fileWriter.writeFile(filePath, content);
      return true;
    } catch (e) {
      console.error("Error writing file:", e.message);
      return false;
    }
  }

  public async deleteFile(filePath: string): Promise<boolean> {
    try {
      await this.fileDeleter.deleteFile(filePath);
      return true;
    } catch (e) {
      console.error("Error deleting file:", e.message);
      return false;
    }
  }
}
