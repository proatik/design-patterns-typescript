import { Visitor } from "./Visitor";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

export class AreaVisitor implements Visitor {
  public visit(shape: Circle | Rectangle): void {
    if (shape instanceof Circle) {
      const area = Math.PI * shape.getRadius() * shape.getRadius();
      console.log(`Circle Area: ${area}`);
    } else if (shape instanceof Rectangle) {
      const area = shape.getWidth() * shape.getHeight();
      console.log(`Rectangle Area: ${area}`);
    }
  }
}
