const onBtn = document.querySelector('[data-start]');
const offBtn = document.querySelector('[data-stop]');
styleBtn();

onBtn.addEventListener('click', startChangeBackgroundColor);
offBtn.addEventListener('click', stopChangeBackgroundColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function startChangeBackgroundColor() {
  blockOnBtn();
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopChangeBackgroundColor() {
  blockOffBtn();
  clearInterval(intervalId);
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
    onBtn.style.mar
}
