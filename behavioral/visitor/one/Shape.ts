import { Visitor } from "./Visitor";

export interface Shape {
  accept(visitor: Visitor): void;
}
