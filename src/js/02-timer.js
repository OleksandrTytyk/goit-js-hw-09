import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
require('flatpickr/dist/themes/dark.css');

let timerId = null;

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtnEl: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
  timer: document.querySelector('.timer'),
};
refs.startBtnEl.disabled = true;

const options = {
  altInput: true,
  altFormat: 'F j, Y',
  dateFormat: 'Y-m-d',

  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Return to the past? Bad idea!');
    } else {
      Notiflix.Notify.success('Push the start button!');

      refs.startBtnEl.disabled = false;
      refs.startBtnEl.addEventListener('click', () => {
        timerId = setInterval(() => {
          const selectedTimeEl = selectedDates[0].getTime() - Date.now();
          if (selectedTimeEl <= 0) {
            clearInterval(timerId);
            Notiflix.Notify.warning('Сountdown is over');

            return;
          }
          convertMs(selectedTimeEl);
        }, 1000);
      });
    }
  },
};
flatpickr(refs.inputEl, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  refs.timer.textContent = `${days} Day(s) ${addLeadingZero(
    hours
  )} Hour(s) ${addLeadingZero(minutes)} Minute(s) ${addLeadingZero(
    seconds
  )} Second(s)`;

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
