export interface WeatherObserver {
  update(temperature: number, humidity: number, pressure: number): void;
}
