const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');
nameInput.addEventListener('input', function(event) {
 const inValue = event.target.value;
    nameOutput.textContent = inValue ? inValue : 'Anonymous';
  });