import { Visitor } from "./Visitor";
import { FileSystemElement } from "./FileSystemElement";

export class File implements FileSystemElement {
  private name: string;
  private size: number;

  constructor(name: string, size: number) {
    this.name = name;
    this.size = size;
  }

  public getName(): string {
    return this.name;
  }

  public getSize(): number {
    return this.size;
  }

  public accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}
