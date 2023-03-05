export class ClockDigitalView {

    template = `<div class="hours flex"></div>
      <div class="separator">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="minutes flex"></div>
      <div class="separator">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div class="seconds flex"></div>`;

    numbers = [
        `<div class="num">
          <div class="el-1 h"></div>
          <div class="el-2 v"></div>
          <div class="el-3 v"></div>
          <div class="el-4 h"></div>
          <div class="el-5 v"></div>
          <div class="el-6 v"></div>
        </div>`,
        `<div class="num">
          <div class="el-2 v"></div>
          <div class="el-3 v"></div>
        </div>`,
        `<div class="num">
          <div class="el-1 h"></div>
          <div class="el-7 h"></div>
          <div class="el-4 h"></div>
          <div class="el-2 v"></div>
          <div class="el-5 v"></div>
        </div>`,
        `<div class="num">
          <div class="el-1 h"></div>
          <div class="el-7 h"></div>
          <div class="el-4 h"></div>
          <div class="el-2 v"></div>
          <div class="el-3 v"></div>
        </div>`,
        `<div class="num">
          <div class="el-2 v"></div>
          <div class="el-3 v"></div>
          <div class="el-7 h"></div>
          <div class="el-6 v"></div>
        </div>`,
        `<div class="num">
          <div class="el-1 h"></div>
          <div class="el-7 h"></div>
          <div class="el-4 h"></div>
          <div class="el-6 v"></div>
          <div class="el-3 v"></div>
        </div>`,
        `<div class="num">
          <div class="el-1 h"></div>
          <div class="el-6 v"></div>
          <div class="el-7 h"></div>
          <div class="el-3 v"></div>
          <div class="el-4 h"></div>
          <div class="el-5 v"></div>
        </div>`,
        `<div class="num">
          <div class="el-1 h"></div>
          <div class="el-2 v"></div>
          <div class="el-3 v"></div>
        </div>`,
        `<div class="num">
          <div class="el-1 h"></div>
          <div class="el-2 v"></div>
          <div class="el-3 v"></div>
          <div class="el-4 h"></div>
          <div class="el-5 v"></div>
          <div class="el-6 v"></div>
          <div class="el-7 h"></div>
        </div>`,
        `<div class="num">
          <div class="el-1 h"></div>
          <div class="el-6 v"></div>
          <div class="el-7 h"></div>
          <div class="el-3 v"></div>
          <div class="el-4 h"></div>
          <div class="el-2 v"></div>
        </div>`,
    ];

    elementSelector = null;

    constructor({elementSelector}) {
        this.elementSelector = elementSelector;

        const element = document.querySelector(this.elementSelector);
        element.classList.add('flex');
        element.innerHTML = this.template;
    }

    /**
     *
     * @param {number} s
     * @param {number} m
     * @param {number} h
     */
    render(s, m, h) {
        const element = document.querySelector(this.elementSelector);

        if (!element) throw new Error(`Element "${this.elementSelector}" not found`);

        let hoursElement = element.querySelector('.hours');
        let minutesElement = element.querySelector('.minutes');
        let secondsElement = element.querySelector('.seconds');

        hoursElement.innerHTML = `${this.numbers[h[0]]} ${this.numbers[h[1]]}`;
        minutesElement.innerHTML = `${this.numbers[m[0]]} ${this.numbers[m[1]]}`;
        secondsElement.innerHTML = `${this.numbers[s[0]]} ${this.numbers[s[1]]}`;
    }
}