import { Image } from "./Image";
import { RealImage } from "./RealImage";

export class ProxyImage implements Image {
  private realImage: RealImage | null = null;
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  display(): void {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.fileName);
    }
    this.realImage.display();
  }

  getFileName(): string {
    return this.fileName;
  }

  getFileExtension(): string {
    const lastIndex = this.fileName.lastIndexOf(".");
    if (lastIndex === -1) {
      return "";
    }
    return this.fileName.substring(lastIndex + 1);
  }
}
