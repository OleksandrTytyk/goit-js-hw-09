const onBtn = document.querySelector('[data-start]');
const offBtn = document.querySelector('[data-stop]');
styleBtn();
onBtn.addEventListener('click', startChangeBackgroundColor);
offBtn.addEventListener('click', stopChangeBackgroundColor);
let intervalId;

function startChangeBackgroundColor() {
  if (intervalId) {
    return;
  }
  intervalId = setInterval(backgroundRandomColor, 1000);
  blockOnBtn();
}

function stopChangeBackgroundColor() {
  clearInterval(intervalId);
  intervalId = 0;
  blockOffBtn();
}

function backgroundRandomColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function blockOffBtn() {
  offBtn.setAttribute('disabled', false);
  onBtn.removeAttribute('disabled');
}

function blockOnBtn() {
  onBtn.setAttribute('disabled', false);
  offBtn.removeAttribute('disabled');
}

function styleBtn() {
  offBtn.style.fontSize = '24px';
  offBtn.style.textAlign = 'center';
  offBtn.style.width = '120px';
  onBtn.style.fontSize = '24px';
  onBtn.style.textAlign = 'center';
  onBtn.style.width = '120px';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
