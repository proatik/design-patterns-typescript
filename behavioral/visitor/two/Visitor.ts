import { File } from "./File";
import { Directory } from "./Directory";

export interface Visitor {
  visit(file: File | Directory): void;
}
