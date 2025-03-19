import { CarFactory } from "./CarFactory";
import { MotorcycleFactory } from "./MotorcycleFactory";

function main() {
  console.log("\n=== Car Factory ===\n");
  const carFactory = new CarFactory();
  carFactory.deliverVehicle();

  console.log("\n=== Motorcycle Factory ===\n");
  const motorcycleFactory = new MotorcycleFactory();
  motorcycleFactory.deliverVehicle();
}

main();
