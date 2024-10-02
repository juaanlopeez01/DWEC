const inputs = document.querySelectorAll('input, select');

inputs.forEach(input => {
  input.addEventListener('blur', (e) => {
    const inputType = input.type;
    const inputValue = input.value;
    const pattern = getPattern(inputType);
    const errorMessage = getErrorMessage(inputType);
    
    if (!validateInput(inputValue, pattern)) {
      input.classList.add('error');
      input.placeholder = errorMessage;
    } else {
      input.classList.remove('error');
      input.placeholder = '';
    }
  });
});

function getPattern(inputType) {
  switch (inputType) {
    case 'text':
        if (inputType === 'nombre' || inputType === 'apellido' || inputType === 'direccion') {
            return;
        }
    case 'email':
        return /^[a-z0-9]+@[a-z]+\.[a-z]{2,}$/;
    case 'tel':
        return /^\d{9}$/;
    case 'number':
        return /^(0|[1-9][0-9]?|1[01][0-9]|120)$/;
  }
};