import WeatherSubject from '../weather/weatherSubject';
import Observer from '../observer';

class Temperature extends Observer {
  protected temperature :number;

  constructor(temperature: number) {
    super();
    this.temperature = temperature;
  }

  update(subject: WeatherSubject): void {
    this.temperature = subject.getTemperature();
  }

  getTemperature() {
    return this.temperature;
  }
}

export default Temperature;
