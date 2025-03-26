import { Shape } from "./Shape";
import { Visitor } from "./Visitor";

export class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  public getRadius(): number {
    return this.radius;
  }

  public accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}
