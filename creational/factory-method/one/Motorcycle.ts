import { Vehicle } from "./Vehicle";

export class Motorcycle implements Vehicle {
  drive(): void {
    console.log("Riding a motorcycle");
  }
}
