import { AirportMediator } from "./AirportMediator";

export class Runway {
  private mediator: AirportMediator;

  constructor(mediator: AirportMediator) {
    this.mediator = mediator;
  }

  public clear(): void {
    console.log("Runway is clear.");
    this.mediator.setRunwayAvailability(true);
  }
}
