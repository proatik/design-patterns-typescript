import { Light } from "./Light";
import { RemoteControl } from "./RemoteControl";
import { LightOnCommand } from "./LightOnCommand";
import { LightOffCommand } from "./LightOffCommand";

function main() {
  const light = new Light();

  const lightOn = new LightOnCommand(light);
  const lightOff = new LightOffCommand(light);

  const remote = new RemoteControl();

  remote.setCommand(lightOn);
  remote.pressButton();

  remote.setCommand(lightOff);
  remote.pressButton();
}

main();
