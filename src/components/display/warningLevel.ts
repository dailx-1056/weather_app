import WeatherSubject from '../weather/weatherSubject';
import Observer from '../observer';

class WarningLevel extends Observer {
  protected warningLevel :number;

  constructor(warningLevel: number) {
    super();
    this.warningLevel = warningLevel;
  }

  update(subject: WeatherSubject): void {
    this.warningLevel = subject.getWarningLevel();
  }

  getWarninglevel() {
    return this.warningLevel;
  }
}

export default WarningLevel;
