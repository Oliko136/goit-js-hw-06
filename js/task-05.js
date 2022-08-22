const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', onNameInput);

function onNameInput(event) {
    event.currentTarget.value === '' ?
        nameOutput.textContent = 'Anonymous' :
        nameOutput.textContent = event.currentTarget.value;

}
