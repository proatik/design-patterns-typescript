import { Lights } from "./Lights";
import { Thermostat } from "./Thermostat";
import { CoffeeMaker } from "./CoffeeMaker ";

export class SmartHomeFacade {
  private lights: Lights;
  private thermostat: Thermostat;
  private coffeeMaker: CoffeeMaker;

  constructor({
    lights,
    thermostat,
    coffeeMaker,
  }: {
    lights: Lights;
    thermostat: Thermostat;
    coffeeMaker: CoffeeMaker;
  }) {
    this.lights = lights;
    this.thermostat = thermostat;
    this.coffeeMaker = coffeeMaker;
  }

  public wakeUp(): void {
    console.log("\n=== Starting Wake Up Sequence ===\n");
    this.thermostat.setTemperature(22);
    this.lights.on();
    this.coffeeMaker.brewCoffee();
    console.log("\n=== Wake Up Sequence Complete ===\n");
  }

  public leaveHome(): void {
    console.log("\n=== Starting Leave Home Sequence ===\n");
    this.thermostat.setTemperature(18);
    this.lights.off();
    console.log("\n=== Leave Home Sequence Complete ===\n");
  }
}
