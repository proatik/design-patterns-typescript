import { File } from "./File";
import { Visitor } from "./Visitor";
import { Directory } from "./Directory";

export class FileSearchVisitor implements Visitor {
  private searchFileName: string;
  private foundFile: File | null = null;

  constructor(searchFileName: string) {
    this.searchFileName = searchFileName;
  }

  public visit(element: File | Directory): void {
    if (element instanceof File) {
      if (element.getName() === this.searchFileName) {
        this.foundFile = element;
      }
    } else if (element instanceof Directory) {
      for (const e of element.getElements()) {
        e.accept(this);
      }
    }
  }

  public getFoundFile(): File | null {
    return this.foundFile;
  }
}
