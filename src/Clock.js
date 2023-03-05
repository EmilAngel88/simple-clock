import moment from 'moment'
import 'moment-timezone';

export class ClockController {

  view = null;

  timeZone = null;

  typeClock = '';

  constructor({ timeZone, view, typeClock }) {
    this.view = view;

    this.timeZone = timeZone;

    this.typeClock = typeClock;
  }

  getCurrentTime = () => {
    const currentTime = moment().tz(this.timeZone);

    const s = currentTime.format('ss');
    const m = currentTime.format('mm');
    const h = currentTime.format('HH');

    if(this.typeClock === 'analog') {
      this.updateState(s, m, h);
    } else if (this.typeClock === 'digital') {
      this.view.render(s, m, h);
    } else {
      throw new Error('Incorrect type of clock');
    }
  }

  updateState(s, m, h) {
    const intermediateHourAngle = Math.floor(m / 12) * 6

      const hh = h < 12 ? (h * 30 + intermediateHourAngle) : ((h - 12) * 30 + intermediateHourAngle);
      const mm = m * 6;
      const ss = s * 6;

    this.view.render(ss, mm, hh);
  }

  start() {
    if (!this.typeClock) throw new Error('Type of clock is not defined');

    setInterval(this.getCurrentTime, 1000);
  }
}
