import { WeatherObserver } from "./WeatherObserver";

export class CurrentConditionsDisplay implements WeatherObserver {
  update(temperature: number, humidity: number, pressure: number): void {
    console.log(`Current: ${temperature}°F, ${humidity}% humidity`);
  }
}
