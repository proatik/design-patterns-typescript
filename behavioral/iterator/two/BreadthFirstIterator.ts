import { Directory } from "./Directory";
import { FileSystemItem } from "./FileSystemItem";
import { FileSystemIterator } from "./FileSystemIterator";

export class BreadthFirstIterator implements FileSystemIterator {
  private queue: FileSystemItem[] = [];

  constructor(root: Directory) {
    this.queue.push(root);
  }

  public hasNext(): boolean {
    return this.queue.length > 0;
  }

  public next(): FileSystemItem | null {
    if (!this.hasNext()) {
      throw new Error("No more elements");
    }

    const current = this.queue.shift()!;

    if (current instanceof Directory) {
      this.queue.push(...current.getContents());
    }

    return current;
  }
}
