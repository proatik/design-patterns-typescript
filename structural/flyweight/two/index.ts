import { FontFactory } from "./FontFactory";

function main() {
  const font1 = FontFactory.getFont("Arial", 12, "Black");
  font1.apply("Hello, World!");

  const font2 = FontFactory.getFont("Arial", 12, "Black");
  font2.apply("Flyweight Pattern");

  const font3 = FontFactory.getFont("Times New Roman", 14, "Blue");
  font3.apply("Design Patterns");

  const font4 = FontFactory.getFont("Arial", 12, "Black");
  font4.apply("Another Text");
}

main();
