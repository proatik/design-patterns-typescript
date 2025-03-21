import { WeatherObserver } from "./WeatherObserver";

export class StatisticsDisplay implements WeatherObserver {
  update(temperature: number, humidity: number, pressure: number): void {
    console.log(
      `Avg/Max/Min temp: ${temperature}/${temperature + 2}/${temperature - 2}`
    );
  }
}
