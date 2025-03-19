import { Device } from "./Device";

export class TV implements Device {
  private on: boolean = false;
  private volume: number = 30;

  turnOn(): void {
    this.on = true;
    console.log("TV is now ON.");
  }

  turnOff(): void {
    this.on = false;
    console.log("TV is now OFF.");
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(volume: number): void {
    this.volume = volume;
    console.log(`TV volume set to ${volume}`);
  }

  isEnabled(): boolean {
    return this.on;
  }
}
