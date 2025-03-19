import { Device } from "./Device";

export abstract class Remote {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  abstract power(): void;

  volumeUp(): void {
    const currentVolume = this.device.getVolume();
    this.device.setVolume(currentVolume + 1);
  }

  volumeDown(): void {
    const currentVolume = this.device.getVolume();
    this.device.setVolume(currentVolume - 1);
  }
}
