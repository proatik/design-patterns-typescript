import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

export interface Visitor {
  visit(shape: Circle | Rectangle): void;
}
