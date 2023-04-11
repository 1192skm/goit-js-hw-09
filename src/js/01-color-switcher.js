const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);
let timerId = null;

startBtn.disabled = false;
stopBtn.disabled = true;

function onStartBtnClick() {
    startBtn.disabled = true;
    stopBtn.disabled = false;

    timerId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopBtnClick() {
    clearInterval(timerId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

