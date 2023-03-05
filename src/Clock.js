import moment from 'moment'
import 'moment-timezone';

export class ClockController {

  view = null;

  timeZone = null;

  constructor({ timeZone, view }) {
    this.view = view;

    this.timeZone = timeZone;
  }

  getCurrentTime = () => {
    const currentTime = moment().tz(this.timeZone);

    const s = currentTime.format('ss');
    const m = currentTime.format('mm');
    const h = currentTime.format('HH');

    this.view.render(s, m, h);
  }

  start() {
    setInterval(this.getCurrentTime, 1000);
  }
}
