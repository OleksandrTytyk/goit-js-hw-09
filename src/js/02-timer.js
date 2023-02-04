import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
let timerId = null;

const refs = {
  inputEl: document.querySelector('#datetime-picker'),
  startBtnEl: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};
refs.startBtnEl.disabled = true;
// const timer = document.querySelector('.timer');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      alert('Choose normal date');
    } else {
        refs.startBtnEl.disabled = false;
        refs.startBtnEl.addEventListener('click', () => {
          timerId = setInterval(() => {
            const selectedTimeEl = selectedDates[0].getTime() - Date.now();
                const timer = convertMs(selectedTimeEl)
              console.log(timer);
          }, 1000);
        });

        // refs.startBtnEl.addEventListener('click', () => {
        //     const selectedTimeEl = selectedDates[0].getTime() - Date.now();
        //     const timer = convertMs(selectedTimeEl)
        //     console.log("refs.startBtnEl.addEventListener ~ timer", timer);
        // })
    }
    },
  
};

// function startTimer(timer) {
    
// }

function updateClockFace({ days, hours, minutes, seconds }) {
  refs.daysEl.textContent = days;
  refs.hoursEl.textContent = hours;
  refs.minutesEl.textContent = minutes;
  refs.secondsE.textContent = seconds;
}
flatpickr(refs.inputEl, options);

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

// refs.startBtnEl.addEventListener('click', () => {
//   let timer = setInterval(() => {
//     let count = new Date(input.value) - new Date();
//     console.log("timer ~ count", count);
//     startBtn.disabled = true;
//     if (count >= 0) {
//       let timerValue = convertMs(count);
//       days.textContent = addLeadingZero(timerValue.days);
//       hours.textContent = addLeadingZero(timerValue.hours);
//       minutes.textContent = addLeadingZero(timerValue.minutes);
//       seconds.textContent = addLeadingZero(timerValue.seconds);
//       if (count <= 10000) timerHtml.style.color = 'red';
//     } else {
//       Notiflix.Notify.success('The countdown is complete');
//       clearInterval(timer);
//     }
//   }, 1000);
// });
