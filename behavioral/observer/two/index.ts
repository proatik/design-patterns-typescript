import { WeatherData } from "./WeatherData";
import { ForecastDisplay } from "./ForecastDisplay";
import { StatisticsDisplay } from "./StatisticsDisplay";
import { CurrentConditionsDisplay } from "./CurrentConditionsDisplay";

function main() {
  const weatherData = new WeatherData();

  const currentDisplay = new CurrentConditionsDisplay();
  const statisticsDisplay = new StatisticsDisplay();
  const forecastDisplay = new ForecastDisplay();

  weatherData.registerObserver(currentDisplay);
  weatherData.registerObserver(statisticsDisplay);
  weatherData.registerObserver(forecastDisplay);

  console.log("\n=== Weather Data Updated ===\n");
  weatherData.setMeasurements(80, 65, 30.4);

  weatherData.removeObserver(forecastDisplay);

  console.log("\n=== Weather Data Updated ===\n");
  weatherData.setMeasurements(79, 66, 30.44);
}

main();
