import moment from 'moment'
import 'moment-timezone';

export class Clock {
  timeZone = null;

  elementSelector = null;

  h = null;

  m = null;

  s = null;

  constructor({ timeZone, elementSelector }) {
    this.timeZone = timeZone;
    this.elementSelector = elementSelector;
    const element = document.querySelector(this.elementSelector);
    element.classList.add('clock');
  }

  getOrCreateArrowElement(rootElement, selector) {
    if (!selector) throw new Error('Selector is empty');

    let elementClock = rootElement.querySelector(selector);

    if (elementClock === null) {
      elementClock = document.createElement('div');
      elementClock.classList.add(selector.slice(1));
      elementClock.classList.add('arrows');

      rootElement.appendChild(elementClock);
    }

    return elementClock;
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

  getCurrentTime = () => {
    const currentTime = moment().tz(this.timeZone);

    const s = currentTime.format('ss');
    const m = currentTime.format('mm');
    const h = currentTime.format('HH');

    this.updateState(s, m, h);
  }

  updateState = (s, m, h) => {
    const intermediateHourAngle = Math.floor(m / 12) * 6

      this.h = h < 12 ? (h * 30 + intermediateHourAngle) : ((h - 12) * 30 + intermediateHourAngle);
      this.m = m * 6;
      this.s = s * 6;

    this.render();
  }

  start() {
    setInterval(this.getCurrentTime, 1000);
  }
}
