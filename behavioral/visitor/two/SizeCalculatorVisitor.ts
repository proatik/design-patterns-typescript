import { File } from "./File";
import { Visitor } from "./Visitor";
import { Directory } from "./Directory";

export class SizeCalculatorVisitor implements Visitor {
  private totalSize: number = 0;

  public visit(element: File | Directory): void {
    if (element instanceof File) {
      this.totalSize += element.getSize();
    } else if (element instanceof Directory) {
      for (const e of element.getElements()) {
        e.accept(this);
      }
    }
  }

  public getTotalSize(): number {
    return this.totalSize;
  }
}
