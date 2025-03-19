import { Remote } from "./Remote";
import { Device } from "./Device";

export class BasicRemote extends Remote {
  constructor(device: Device) {
    super(device);
  }

  power(): void {
    if (this.device.isEnabled()) {
      this.device.turnOff();
    } else {
      this.device.turnOn();
    }
  }
}
