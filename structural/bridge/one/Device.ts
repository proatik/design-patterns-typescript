export interface Device {
  turnOn(): void;
  turnOff(): void;
  getVolume(): number;
  setVolume(volume: number): void;
  isEnabled(): boolean;
}
