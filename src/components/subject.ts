import Observer from './observer';

abstract class Subject {
  abstract registerObserver(observer: Observer): void;
  abstract removeObserver(observer: Observer): void;
  abstract notifyObserver(): void;
}

export default Subject;
