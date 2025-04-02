import { FileSystemItem } from "./FileSystemItem";

export interface FileSystemIterator {
  hasNext(): boolean;
  next(): FileSystemItem | null;
}
