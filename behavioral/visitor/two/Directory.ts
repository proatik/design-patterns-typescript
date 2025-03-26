import { Visitor } from "./Visitor";
import { FileSystemElement } from "./FileSystemElement";

export class Directory implements FileSystemElement {
  private name: string;
  private elements: FileSystemElement[];

  constructor(name: string) {
    this.name = name;
    this.elements = [];
  }

  public getName(): string {
    return this.name;
  }

  public addElement(element: FileSystemElement): void {
    this.elements.push(element);
  }

  public getElements(): FileSystemElement[] {
    return this.elements;
  }

  public accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}
