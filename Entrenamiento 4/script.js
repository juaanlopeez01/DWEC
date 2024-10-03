const inputs = document.querySelectorAll('input:not([id="tipoVia"]), select:not([id="tipoVia"])');

inputs.forEach(input => {
    input.addEventListener('blur', (e) => {
        const inputType = input.type;
        const inputValue = input.value.trim();
        const pattern = getPattern(input);

    if (inputValue === "") {
        input.classList.add('error');
        input.setCustomValidity('Este campo no puede estar vacío.');
    } else if (!validateInput(inputValue, pattern)) {
        input.classList.add('error');
        input.setCustomValidity('Formato inválido.');
    } else {
        input.classList.remove('error');
        input.setCustomValidity(''); 
        if (input.classList.contains('nombre') || input.classList.contains('apellido') || input.classList.contains('direccion') || input.classList.contains('dni')) {
            input.value = inputValue.toUpperCase();
        } 
    }
    });
});

function getPattern(input) {
    const inputType = input.type;
    switch (inputType) {
        case 'text':
            if (input.classList.contains('nombre') || input.classList.contains('apellido') || input.classList.contains('direccion') ) {
                return /^[A-Z\s]+$/i;
            } else if (input.classList.contains('dni')) {
                return /^\d{8}[A-Z]$/i;
            }
            break;

        case 'email':
            return /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/;

        case 'tel':
            return /^\d{9}$/; 

        case 'number':
            return /^(0|[1-9][0-9]?|1[01][0-9]|120)$/; 

        default:
            return;
      }
}

function validateInput(value, pattern) {
    return pattern.test(value);
}
