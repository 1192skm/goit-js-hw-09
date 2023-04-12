import Notiflix from 'notiflix';

const form = document.querySelector('.form')

form.addEventListener('submit', onFormSubmit);


function onFormSubmit(evt) {
  evt.preventDefault();
  let delay = Number(evt.currentTarget.delay.value);
  const step = Number(evt.currentTarget.step.value);
  const amount = Number(evt.currentTarget.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    const position = i;
    createPromise(position, delay)
      .then(({ position, delay } ) => {
        setTimeout(() => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`,
          );
          // console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
        }, delay);
      })
      .catch(({ position, delay }) => {
        setTimeout(() => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
          // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        }, delay);
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.5;

  return new Promise((resolve, reject) => {
  
      if (shouldResolve) {
        resolve({ position, delay })
      } else {
        reject({ position, delay })
      }
  })
}
