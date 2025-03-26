import { Circle } from "./Circle";
import { Visitor } from "./Visitor";
import { Rectangle } from "./Rectangle";

export class PerimeterVisitor implements Visitor {
  public visit(shape: Circle | Rectangle): void {
    if (shape instanceof Circle) {
      const perimeter = 2 * Math.PI * shape.getRadius();
      console.log(`Circle Perimeter: ${perimeter}`);
    } else if (shape instanceof Rectangle) {
      const perimeter = 2 * (shape.getWidth() + shape.getHeight());
      console.log(`Rectangle Perimeter: ${perimeter}`);
    }
  }
}
