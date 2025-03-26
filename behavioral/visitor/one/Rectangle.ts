import { Shape } from "./Shape";
import { Visitor } from "./Visitor";

export class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public accept(visitor: Visitor): void {
    visitor.visit(this);
  }
}
