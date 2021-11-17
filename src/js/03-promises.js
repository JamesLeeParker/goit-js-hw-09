import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

Notiflix.Notify.success('Sol lucet omnibus');
