import { FileSystemComponent } from "./FileSystemComponent";

export class File implements FileSystemComponent {
  private name: string;
  private size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  public printName(): void {
    console.log(`File: ${this.name}`);
  }

  public getSize(): number {
    return this.size;
  }

  public getName(): string {
    return this.name;
  }
}
