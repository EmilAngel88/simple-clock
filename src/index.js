import {Clock} from "./Clock";
import './index.css';

new Clock({ timeZone: 'GMT+7', elementSelector: '.spb-clocks' }).render();

new Clock({ timeZone: 'GMT+7', elementSelector: '.msk-clocks' }).render();

new Clock({ timeZone: 'GMT+7', elementSelector: '.tbilisi-clocks' }).render();
