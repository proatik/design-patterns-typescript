export interface AirportMediator {
  isRunwayAvailable(): boolean;
  setRunwayAvailability(status: boolean): void;
}
