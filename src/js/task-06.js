const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputValidation);

function onInputValidation(event) {
    const input = event.currentTarget;
    const inputLength = Number(inputEl.dataset.length);

    if (input.value.length === inputLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
    
}