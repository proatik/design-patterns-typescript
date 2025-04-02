import { FileSystemItem } from "./FileSystemItem";

export class Directory implements FileSystemItem {
  private name: string;
  private contents: FileSystemItem[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public add(item: FileSystemItem): void {
    this.contents.push(item);
  }

  public getContents(): FileSystemItem[] {
    return this.contents;
  }

  public getName(): string {
    return this.name;
  }
}
