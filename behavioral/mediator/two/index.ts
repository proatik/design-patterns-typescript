import { Flight } from "./Flight";
import { Runway } from "./Runway";
import { AirportMediator } from "./AirportMediator";
import { AirportControlTower } from "./AirportControlTower";

function main(): void {
  const controlTower: AirportMediator = new AirportControlTower();

  const flight1: Flight = new Flight(controlTower, "KE123");
  const flight2: Flight = new Flight(controlTower, "OZ456");
  const runway: Runway = new Runway(controlTower);

  flight1.land();
  flight2.land();
  runway.clear();
  flight2.land();
}

main();
