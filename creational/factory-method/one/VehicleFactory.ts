import { Vehicle } from "./Vehicle";

export abstract class VehicleFactory {
  abstract createVehicle(): Vehicle;

  public deliverVehicle(): void {
    const vehicle = this.createVehicle();
    console.log("Delivering the vehicle:");
    vehicle.drive();
  }
}
