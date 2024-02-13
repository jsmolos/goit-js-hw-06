const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const emptyUL = document.getElementById('ingredients');
console.log(emptyUL);
ingredients.forEach(ingredient => {
  console.log(ingredient);
  const liofEmptyUL = document.createElement('li');
  liofEmptyUL.textContent = ingredient;
  liofEmptyUL.classList.add('item');
  console.log(liofEmptyUL);
  emptyUL.appendChild(liofEmptyUL);
});