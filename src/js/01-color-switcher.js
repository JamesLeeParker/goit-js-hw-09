function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('button[data-start]');
const btnStopRef = document.querySelector('button[data-stop]');
console.log(btnStartRef);
let timerId = null;
btnStopRef.setAttribute('disabled', 'true');

const switchBgColor = () => {
  btnStartRef.setAttribute('disabled', 'true');
  btnStopRef.removeAttribute('disabled');

  timerId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

const stopSwitchBg = () => {
  if (btnStartRef.hasAttribute('disabled')) {
    btnStopRef.setAttribute('disabled', 'true');
  }
  btnStartRef.removeAttribute('disabled');

  clearInterval(timerId);
};

btnStartRef.addEventListener('click', switchBgColor);
btnStopRef.addEventListener('click', stopSwitchBg);
