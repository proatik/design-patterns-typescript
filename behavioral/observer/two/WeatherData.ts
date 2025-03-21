import { WeatherStation } from "./WeatherStation";
import { WeatherObserver } from "./WeatherObserver";

export class WeatherData implements WeatherStation {
  private observers: WeatherObserver[] = [];
  private temperature: number = 0;
  private humidity: number = 0;
  private pressure: number = 0;

  registerObserver(observer: WeatherObserver): void {
    this.observers.push(observer);
  }

  removeObserver(observer: WeatherObserver): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature, this.humidity, this.pressure);
    }
  }

  setMeasurements(
    temperature: number,
    humidity: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.notifyObservers();
  }
}
