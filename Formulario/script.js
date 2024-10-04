// seleccionamos todos los elementos input, excepto aquellos con id "tipoVia"
const inputs = document.querySelectorAll('input:not([id="tipoVia"]), select:not([id="tipoVia"])');

// recorremos cada input/elemento de la lista obtenida
inputs.forEach(input => {
  // añadimos un evento 'blur' 
    input.addEventListener('blur', (e) => {
        const inputType = input.type; // obtenemos el tipo de input 
        const inputValue = input.value.trim(); // obtenemos el valor del campo y eliminamos espacios en blanco
        const pattern = getPattern(input); // obtenemos el patrón de validación 

        if (inputValue === "") {
            input.classList.add('error');
            input.setCustomValidity('Este campo no puede estar vacío.');
        } 
        // si el valor no coincide con el patrón de validación, añadimos un mensaje
        else if (!validateInput(inputValue, pattern)) {
            input.classList.add('error');
            input.setCustomValidity('Formato inválido.');
        } 
        // si el valor es válido, eliminamos la clase de error y restablecemos el mensaje de validación
        else {
            input.classList.remove('error');
            input.setCustomValidity(''); // se restablece el mensaje de error

            if (input.classList.contains('nombre') || input.classList.contains('apellido') || input.classList.contains('direccion') || input.classList.contains('dni')) {
                input.value = inputValue.toUpperCase(); // convertimos en mayusculas
            } 
        }
    });
});

function getPattern(input) {
    const inputType = input.type; // obtenemos el tipo de input
    switch (inputType) {
        case 'text':
            //el patrón permite solo letras y espacios
            if (input.classList.contains('nombre') || input.classList.contains('apellido') || input.classList.contains('direccion') ) {
                return /^[A-Z\s]+$/i; 
            } 
            else if (input.classList.contains('dni')) {
                return /^\d{8}[A-Z]$/i; // patrón para DNI: 8 dígitos seguidos de una letra
            }
            break;

        // patrón para el email
        case 'email':
            return /^[a-z0-9]+@[a-z]+\.[a-z]{2,4}$/;

        // patrón para el numero de teléfono 
        case 'tel':
            return /^\d{9}$/; 

        // patrón para la edad para que sea de 0 a 120 años
        case 'number':
            return /^(0|[1-9][0-9]?|1[01][0-9]|120)$/; 
        default:
            return;
    }
}

// funcion para validad si el patron es correcto
function validateInput(value, pattern) {
    return pattern.test(value);
}
