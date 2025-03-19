import { Car } from "./Car";
import { VehicleFactory } from "./VehicleFactory";

export class CarFactory extends VehicleFactory {
  createVehicle(): Car {
    return new Car();
  }
}
