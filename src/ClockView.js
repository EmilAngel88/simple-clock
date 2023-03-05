export class ClockView {

    elementSelector = null;

    s = null;

    m = null;

    h = null;

    constructor({elementSelector}) {
        this.elementSelector = elementSelector;
        const element = document.querySelector(this.elementSelector);
        element.classList.add('clock');
    }

    /**
     * Функция дл создания стрелки
     * @param {HTMLElement} rootElement
     * @param {string} selector
     * @returns {HTMLElement}
     */
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

    updateState(s, m, h) {
        const intermediateHourAngle = Math.floor(m / 12) * 6

        this.h = h < 12 ? (h * 30 + intermediateHourAngle) : ((h - 12) * 30 + intermediateHourAngle);
        this.m = m * 6;
        this.s = s * 6;
    }

    /**
     *
     * @param {number} s
     * @param {number} m
     * @param {number} h
     */
    render(s, m, h) {
        const element = document.querySelector(this.elementSelector);

        if (element === null) throw new Error(`Element "${this.elementSelector}" not found`);

        this.updateState(s, m, h);

        let hoursElement = this.getOrCreateArrowElement(element, '.hours-arrow');
        hoursElement.style.transform = `rotate(${this.h}deg)`;

        let minutesElement = this.getOrCreateArrowElement(element, '.minutes-arrow');
        minutesElement.style.transform = `rotate(${this.m}deg)`;

        let secondsElement = this.getOrCreateArrowElement(element, '.seconds-arrow');
        secondsElement.style.transform = `rotate(${this.s}deg)`;

    }
}