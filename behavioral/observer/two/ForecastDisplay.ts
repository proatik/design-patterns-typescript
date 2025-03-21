import { WeatherObserver } from "./WeatherObserver";

export class ForecastDisplay implements WeatherObserver {
  update(temperature: number, humidity: number, pressure: number): void {
    console.log(`Forecast: ${pressure < 29.92 ? "Rain" : "Sunny"}`);
  }
}
