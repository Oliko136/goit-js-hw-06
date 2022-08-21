const fontSizeControlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeControlEl.addEventListener('input', onFontSizeControl);

function onFontSizeControl(event) {
    textEl.style.fontSize = `${ event.currentTarget.value }px`;
}