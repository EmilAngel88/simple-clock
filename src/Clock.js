

export class Clock {
  timeZone = null;

  elementSelector = null;

  h = 45;

  m = 10;

  s = 20;

  constructor({ timeZone, elementSelector }) {
    this.timeZone = timeZone;
    this.elementSelector = elementSelector;
    const element = document.querySelector(this.elementSelector);
    element.classList.add('clock');
  }

  getOrCreateArrowElement(rootElement, selector) {
    if (!selector) throw new Error('Selector is empty');

    let element = rootElement.querySelector(selector);

    if (element === null) {
      element = document.createElement('div');
      element.classList.add(selector.slice(1));
      element.classList.add('arrows');

      rootElement.appendChild(element);
    }

    return element;
  }

  render() {
    const element = document.querySelector(this.elementSelector);

    if (element === null) throw new Error(`Element "${this.elementSelector}" not found`);

    let hoursElement = this.getOrCreateArrowElement(element, '.hours-arrow');
    hoursElement.style.transform = `rotate(${this.h}deg)`;

    let minutesElement = this.getOrCreateArrowElement(element, '.minutes-arrow');
    minutesElement.style.transform = `rotate(${this.m}deg)`;

    let secondsElement = this.getOrCreateArrowElement(element, '.seconds-arrow');
    secondsElement.style.transform = `rotate(${this.s}deg)`;
  }
}
