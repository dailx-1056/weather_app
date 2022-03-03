import Subject from '../subject';
import Observer from '../observer';

class WeatherSubject extends Subject {
  protected temperature: number;
  protected humidity: number;
  protected warningLevel: number;
  protected observerList: Observer[];

  constructor(temperature: number, humidity: number, warningLevel: number) {
    super();
    this.temperature = temperature;
    this.humidity = humidity;
    this.warningLevel = warningLevel;
    this.observerList = [];
  }

  registerObserver(observer: Observer): void {
    this.observerList.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observerList.indexOf(observer, 0);
    this.observerList.splice(index, 1);
  }

  notifyObserver(): void {
    for(let observer of this.observerList) {
      observer.update(this);
    }
  }

  getTemperature() {
    return this.temperature;
  }

  getHumidity() {
    return this.humidity;
  }

  getWarningLevel() {
    return this.warningLevel;
  }

  setTemperature(temperature: number) {
    this.temperature = temperature;
    this.notifyObserver();
  }

  setHumidity(humidity: number) {
    this.humidity = humidity;
    this.notifyObserver();
  }

  setWarningLevel(warningLevel: number) {
    this.warningLevel = warningLevel;
    this.notifyObserver();
  }
}

export default WeatherSubject;
