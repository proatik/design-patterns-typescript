import { FileSystemComponent } from "./FileSystemComponent";

export class Directory implements FileSystemComponent {
  private name: string;
  private components: FileSystemComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public add(component: FileSystemComponent): void {
    this.components.push(component);
  }

  public remove(component: FileSystemComponent): void {
    this.components = this.components.filter((c) => c !== component);
  }

  public removeByName(name: string): void {
    this.components = this.components.filter(
      (component) => component.getName() !== name
    );
  }

  public printName(): void {
    console.log(`Directory: ${this.name}`);
    this.components.forEach((component) => component.printName());
  }

  public getSize(): number {
    return this.components.reduce(
      (totalSize, component) => totalSize + component.getSize(),
      0
    );
  }

  public getName(): string {
    return this.name;
  }
}
