import {ClockView} from './ClockView';
import moment from 'moment'
import 'moment-timezone';

export class ClockController extends ClockView {
  timeZone = null;

  constructor({ timeZone, elementSelector }) {
    super(elementSelector);

    this.timeZone = timeZone;
  }

  getCurrentTime = () => {
    const currentTime = moment().tz(this.timeZone);

    const s = currentTime.format('ss');
    const m = currentTime.format('mm');
    const h = currentTime.format('HH');

    this.updateState(s, m, h);
  }

  updateState(s, m, h) {
    const intermediateHourAngle = Math.floor(m / 12) * 6

      const hh = h < 12 ? (h * 30 + intermediateHourAngle) : ((h - 12) * 30 + intermediateHourAngle);
      const mm = m * 6;
      const ss = s * 6;

    this.render(ss, mm, hh);
  }

  start() {
    setInterval(this.getCurrentTime, 1000);
  }
}
