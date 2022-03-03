import { temperature, humidity, warningLevel } from './dump_data/weather.json';
import WeatherSubject from './components/weather/weatherSubject';
import Temperature from './components/display/temperature';
import Humidity from './components/display/humidity';
import WarningLevel from './components/display/warningLevel';

const weather: WeatherSubject = new WeatherSubject(temperature, humidity, warningLevel);
const temperatureDisplay: Temperature = new Temperature(temperature);
const humidityDisplay: Humidity = new Humidity(humidity);

weather.registerObserver(temperatureDisplay);
weather.registerObserver(humidityDisplay);
console.log('Weather change !!!');
weather.setTemperature(17);
console.log(temperatureDisplay.getTemperature());
