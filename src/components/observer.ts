import Subject from './subject';

abstract class Observer {
  abstract update(subject: Subject): void;
}

export default Observer;
