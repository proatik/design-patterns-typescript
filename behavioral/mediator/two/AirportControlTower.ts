import { AirportMediator } from "./AirportMediator";

export class AirportControlTower implements AirportMediator {
  private isRunwayFree: boolean = true;

  public isRunwayAvailable(): boolean {
    return this.isRunwayFree;
  }

  public setRunwayAvailability(status: boolean): void {
    this.isRunwayFree = status;
  }
}
