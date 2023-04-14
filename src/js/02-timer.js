import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dateInput = document.querySelector('#datetime-picker');
const btn = document.querySelector('button[data-start]');
const dayTimer = document.querySelector('[data-days]');
const hoursTimer = document.querySelector('[data-hours]');
const minutesTimer = document.querySelector('[data-minutes]');
const secondsTimer = document.querySelector('[data-seconds]');

btn.addEventListener('click', onBtnClick)

btn.disabled = true;
const currentDate = Date.now();

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (setDate.selectedDates[0].getTime() < currentDate) {
        btn.disabled = true;
        Notiflix.Notify.init({
          position: 'center-top',
        });
        Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btn.disabled = false;
    }
  },
};

const setDate = flatpickr(dateInput, options);

function onBtnClick() {
    const timerId = setInterval(() => {
        const currentDate = Date.now();
        const timer = setDate.selectedDates[0].getTime() - currentDate;
        
      console.log(timer);
      console.log(typeof timer)
        const clock = convertMs(timer);
        console.log(clock);
        dayTimer.textContent = addLeadingZero(clock.days);
        hoursTimer.textContent = addLeadingZero(clock.hours);
        minutesTimer.textContent = addLeadingZero(clock.minutes);
        secondsTimer.textContent = addLeadingZero(clock.seconds);
        if (timer < 999) {
          clearInterval(timerId);
        }
    }, 1000)

}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, '0');
}
