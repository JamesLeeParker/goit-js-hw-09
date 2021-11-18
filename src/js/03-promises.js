import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');
const delayRef = formRef.querySelector('input[name="delay"');
const stepRef = formRef.querySelector('input[name="step"');
const amountRef = formRef.querySelector('input[name="amount"');

formRef.addEventListener('submit', makeMagic);

function makeMagic(event) {
  event.preventDefault();

  for (let i = 0; i < amountRef.value; i += 1) {
    const delay = Number(delayRef.value);
    const step = Number(stepRef.value);
    createPromise(amountRef, delay + step * i)
      .then(result => consol.log(result))
      .catch(rej => console.log(rej));
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, rejected) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notiflix.Notify.success('RESOLVE'));
      } else {
        rejected(Notiflix.Notify.failure('REJECTED'));
      }
    }, delay);
  });
}
