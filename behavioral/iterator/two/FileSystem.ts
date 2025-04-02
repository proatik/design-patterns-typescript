import { Directory } from "./Directory";
import { FileSystemIterator } from "./FileSystemIterator";
import { DepthFirstIterator } from "./DepthFirstIterator";
import { BreadthFirstIterator } from "./BreadthFirstIterator";

export class FileSystem {
  private root: Directory;

  constructor(root: Directory) {
    this.root = root;
  }

  public depthFirstIterator(): FileSystemIterator {
    return new DepthFirstIterator(this.root);
  }

  public breadthFirstIterator(): FileSystemIterator {
    return new BreadthFirstIterator(this.root);
  }
}
