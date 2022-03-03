import WeatherSubject from '../weather/weatherSubject';
import Observer from '../observer';

class Humidity extends Observer {
  protected humidity :number;

  constructor(humidity: number) {
    super();
    this.humidity = humidity;
  }

  update(subject: WeatherSubject): void {
    this.humidity = subject.getHumidity();
  }

  getHumidity() {
    return this.humidity;
  }
}

export default Humidity;
