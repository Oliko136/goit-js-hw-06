const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', onDecrementClick);
incrementBtn.addEventListener('click', onIncrementClick);

function onDecrementClick() {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

function onIncrementClick() {
    counterValue += 1;
    valueEl.textContent = counterValue;
}