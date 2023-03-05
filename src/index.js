import { ClockController } from "./Clock";
import { ClockView } from "./ClockView";
import { ClockDigitalView } from "./ClockDigitalView";
import './index.css';

const fiji = {
    view: new ClockView({elementSelector: '.spb-clocks'}),
    timeZone: 'Pacific/Fiji',
    typeClock: 'analog',
}

const comoro = {
    view: new ClockView({elementSelector: '.tbilisi-clocks'}),
    timeZone: 'Indian/Comoro',
    typeClock: 'analog',
}

const midway = {
    view: new ClockView({elementSelector: '.la-clocks'}),
    timeZone: 'Pacific/Midway',
    typeClock: 'analog',
}

new ClockController(fiji).start();

new ClockController(comoro).start();

new ClockController(midway).start();

const fijiDig = {
    view: new ClockDigitalView({elementSelector: '.jjj-clocks'}),
    timeZone: 'Pacific/Fiji',
    typeClock: 'digital',
}

const comoroDig = {
    view: new ClockDigitalView({elementSelector: '.lll-clocks'}),
    timeZone: 'Indian/Comoro',
    typeClock: 'digital',
}

const midwayDig = {
    view: new ClockDigitalView({elementSelector: '.qqq-clocks'}),
    timeZone: 'Pacific/Midway',
    typeClock: 'digital',
}

new ClockController(fijiDig).start();

new ClockController(comoroDig).start();

new ClockController(midwayDig).start();