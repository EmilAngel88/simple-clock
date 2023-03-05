export class ClockView {

    elementSelector = null;

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

    /**
     *
     * @param {number} s
     * @param {number} m
     * @param {number} h
     */
    render(s, m, h) {
        const element = document.querySelector(this.elementSelector);

        if (element === null) throw new Error(`Element "${this.elementSelector}" not found`);

        let hoursElement = this.getOrCreateArrowElement(element, '.hours-arrow');
        hoursElement.style.transform = `rotate(${h}deg)`;

        let minutesElement = this.getOrCreateArrowElement(element, '.minutes-arrow');
        minutesElement.style.transform = `rotate(${m}deg)`;

        let secondsElement = this.getOrCreateArrowElement(element, '.seconds-arrow');
        secondsElement.style.transform = `rotate(${s}deg)`;

    }
}