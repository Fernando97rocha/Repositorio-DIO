function changeMode() {
    changeClass();
}

function changeClass() {
    button.classList.toggle(darkMode);
    

}

const body = document.getElementById('body')[0];
const footer = document.getElementById('footer')[0];
const h1 = document.getElementById('page-title');
const button = document.getElementById('mode-selector');

button.addEventListener('click', changeMode);