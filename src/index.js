import {Clock} from "./Clock";
import './index.css';

new Clock({ timeZone: 'Europe/Moscow', elementSelector: '.spb-clocks' }).start();

new Clock({ timeZone: 'Indian/Comoro', elementSelector: '.tbilisi-clocks' }).start();

new Clock({ timeZone: 'Europe/Monaco', elementSelector: '.la-clocks' }).start();