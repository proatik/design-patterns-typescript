import { AirportMediator } from "./AirportMediator";

export class Flight {
  private mediator: AirportMediator;
  private flightNumber: string;

  constructor(mediator: AirportMediator, flightNumber: string) {
    this.mediator = mediator;
    this.flightNumber = flightNumber;
  }

  public land(): void {
    if (this.mediator.isRunwayAvailable()) {
      console.log(`Flight ${this.flightNumber} is landing.`);
      this.mediator.setRunwayAvailability(false);
    } else {
      console.log(`Flight ${this.flightNumber} is waiting to land.`);
    }
  }
}
