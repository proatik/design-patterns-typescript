import { FileSystemItem } from "./FileSystemItem";

export class File implements FileSystemItem {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}
