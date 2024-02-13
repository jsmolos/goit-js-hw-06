function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const inputElement = document.querySelector('input');
const divBoxes = document.getElementById('boxes');

btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);
function createBoxes() {
  const amount = inputElement.value;
  destroyBoxes();

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const divBox = document.createElement('div');
    divBox.style.width = `${size}px`;
    divBox.style.height = `${size}px`;
    divBox.style.backgroundColor = getRandomHexColor();
    divBoxes.appendChild(divBox);
    size += 10;
  }
}
function destroyBoxes() {
  divBoxes.innerHTML = '';
  inputElement.value = '';
}