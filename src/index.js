import { ClockController } from "./Clock";
import './index.css';

new ClockController({ timeZone: 'Pacific/Fiji', elementSelector: '.spb-clocks' }).start();

new ClockController({ timeZone: 'Indian/Comoro', elementSelector: '.tbilisi-clocks' }).start();

new ClockController({ timeZone: 'Pacific/Midway', elementSelector: '.la-clocks' }).start();