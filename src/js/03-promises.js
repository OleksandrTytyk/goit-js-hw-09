import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
  firstDelayEl: document.querySelector('input[name=delay]'),
  stepDelayEl: document.querySelector('input[name=step]'),
  amountEl: document.querySelector('input[name=amount]'),
};

refs.formEl.addEventListener('submit', submitForm);

function submitForm(e) {
  let delay = refs.firstDelayEl.value;

  e.preventDefault();

  for (let i = 1; i <= refs.amountEl.value; i += 1) {
    let position = i;

    createPromise(position, delay);
    delay = (+delay) + (+refs.stepDelayEl.value);
  }
}

function createPromise(position, delay) {
  setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  }, delay);
}
