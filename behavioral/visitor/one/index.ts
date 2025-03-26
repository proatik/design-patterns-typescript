import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { AreaVisitor } from "./AreaVisitor";
import { PerimeterVisitor } from "./PerimeterVisitor";

function main(): void {
  const circle: Circle = new Circle(5);
  const rectangle: Rectangle = new Rectangle(4, 6);

  const areaVisitor: AreaVisitor = new AreaVisitor();
  const perimeterVisitor: PerimeterVisitor = new PerimeterVisitor();

  console.log("\n=== Calculating Area: ===\n");
  circle.accept(areaVisitor);
  rectangle.accept(areaVisitor);

  console.log("\n=== Calculating Perimeter: ===\n");
  circle.accept(perimeterVisitor);
  rectangle.accept(perimeterVisitor);
}

main();
