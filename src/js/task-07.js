const fontSizeControl = document.getElementById('font-size-control');
  const textElement = document.getElementById('text');
  fontSizeControl.addEventListener('input', updateFontSize);
  function updateFontSize() {
    textElement.style.fontSize = fontSizeControl.value + 'px';
  }