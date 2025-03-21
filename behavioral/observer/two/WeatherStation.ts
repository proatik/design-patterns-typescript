import { WeatherObserver } from "./WeatherObserver";

export interface WeatherStation {
  registerObserver(observer: WeatherObserver): void;
  removeObserver(observer: WeatherObserver): void;
  notifyObservers(): void;
}
