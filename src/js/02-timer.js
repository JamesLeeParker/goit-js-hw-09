import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputRef = document.querySelector('#datetime-picker');
const btnRef = document.querySelector('button[data-start]');
const timerRef = document.querySelector('.timer');
const daysRef = timerRef.querySelector('span[data-days]');
const hoursRef = timerRef.querySelector('span[data-hours]');
const minutesRef = timerRef.querySelector('span[data-minutes]');
const secondsRef = timerRef.querySelector('span[data-seconds]');

btnRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date().getTime(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= options.defaultDate) {
      alert('Please choose a date in the future');
    } else {
      btnRef.disabled = false;
      options.enableTime = false;
    }
  },
};
const fpickr = flatpickr(inputRef, options);

function differenceTime(pickedDate) {
  btnRef.disabled = true;
  const timerId = setInterval(() => {
    let currentDate = new Date().getTime();
    let pickedTime = fpickr.selectedDates[0].getTime();
    let timeDifference = pickedTime - currentDate;
    if (timeDifference <= 1000) clearInterval(timerId);
    const { days, hours, minutes, seconds } = convertMs(timeDifference);
    daysRef.textContent = days;
    hoursRef.textContent = addLeadingZero(hours);
    minutesRef.textContent = addLeadingZero(minutes);
    secondsRef.textContent = addLeadingZero(seconds);
  }, 1000);
}

btnRef.addEventListener('click', differenceTime);

function addLeadingZero(value) {
  return `${value}`.padStart(2, 0);
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
