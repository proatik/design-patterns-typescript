import { Device } from "./Device";

export class Radio implements Device {
  private on: boolean = false;
  private volume: number = 30;

  turnOn(): void {
    this.on = true;
    console.log("Radio is now ON.");
  }

  turnOff(): void {
    this.on = false;
    console.log("Radio is now OFF.");
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(volume: number): void {
    this.volume = volume;
    console.log(`Radio volume set to ${volume}`);
  }

  isEnabled(): boolean {
    return this.on;
  }
}
