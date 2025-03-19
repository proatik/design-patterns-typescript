import { ConcreteProductFactory } from "./ConcreteProductFactory";

function main() {
  const factory = new ConcreteProductFactory();

  console.log("\n=== Order Electronics ===\n");
  const electronics = factory.orderProduct("electronics");

  console.log("\n=== Order Clothing ===\n");
  const clothing = factory.orderProduct("clothing");

  console.log("\n=== Order Book ===\n");
  const book = factory.orderProduct("book");
}

main();
