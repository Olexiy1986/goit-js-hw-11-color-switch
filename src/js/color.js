'use strict';

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
};
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
const color = {
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval((min, max) => {
      const color = colors[randomIntegerFromInterval(min, max)];
      refs.body.style.backgroundColor = color;
    }, 1000, 0, colors.length - 1);
  },
  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  },
};

refs.startBtn.addEventListener('click', color.start.bind(color));
refs.stopBtn.addEventListener('click', color.stop.bind(color));








