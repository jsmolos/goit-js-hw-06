let counterValue = 0;
const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const counterSpan = document.getElementById('value');
  decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    updateCounter();
  });

  incrementButton.addEventListener('click', () => {
    counterValue += 1;
    updateCounter();
  });
  function updateCounter() {
    counterSpan.textContent = counterValue;
  }