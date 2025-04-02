import { Directory } from "./Directory";
import { FileSystemItem } from "./FileSystemItem";
import { FileSystemIterator } from "./FileSystemIterator";

export class DepthFirstIterator implements FileSystemIterator {
  private stack: FileSystemItem[] = [];

  constructor(root: Directory) {
    this.stack.push(root);
  }

  public hasNext(): boolean {
    return this.stack.length > 0;
  }

  public next(): FileSystemItem | null {
    if (!this.hasNext()) {
      throw new Error("No more elements");
    }

    const current = this.stack.pop()!;

    if (current instanceof Directory) {
      const contents = current.getContents();

      for (let i = contents.length - 1; i >= 0; i--) {
        this.stack.push(contents[i]);
      }
    }

    return current;
  }
}
