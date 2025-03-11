import { Lights } from "./Lights";
import { Thermostat } from "./Thermostat";
import { CoffeeMaker } from "./CoffeeMaker ";
import { SmartHomeFacade } from "./SmartHomeFacade";

function main() {
  const lights = new Lights();
  const thermostat = new Thermostat();
  const coffeeMaker = new CoffeeMaker();

  const smartHome = new SmartHomeFacade({ lights, thermostat, coffeeMaker });

  smartHome.wakeUp();
  smartHome.leaveHome();
}

main();
