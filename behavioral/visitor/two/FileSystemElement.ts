import { Visitor } from "./Visitor";

export interface FileSystemElement {
  accept(visitor: Visitor): void;
}
