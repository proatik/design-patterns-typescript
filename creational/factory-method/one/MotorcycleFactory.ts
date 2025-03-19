import { Motorcycle } from "./Motorcycle";
import { VehicleFactory } from "./VehicleFactory";

export class MotorcycleFactory extends VehicleFactory {
  createVehicle(): Motorcycle {
    return new Motorcycle();
  }
}
