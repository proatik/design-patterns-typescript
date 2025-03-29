import { Person } from "./Person";

function main() {
  const original = new Person("John", 30, "123 Main St");
  original.displayInfo();

  const cloned = original.clone();
  cloned.setAddress("456 Clone St");

  console.log("\nAfter cloning and modifying the clone:\n");
  original.displayInfo();
  cloned.displayInfo();
}

main();
