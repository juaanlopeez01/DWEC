// Precios de los productos
const precios = {
    iphone: 938.99,
    cargador: 49.99,
    funda: 79.99
};

// Cantidades iniciales de cada producto
const cantidades = {
    iphone: 0,
    cargador: 0,
    funda: 0
};

// Actualiza la visualización del total por producto y el total general
function actualizarTotales() {
    // Actualizar el total de cada producto
    document.getElementById('total-iphone').textContent = (cantidades.iphone * precios.iphone).toFixed(2) + '€';
    document.getElementById('total-cargador').textContent = (cantidades.cargador * precios.cargador).toFixed(2) + '€';
    document.getElementById('total-funda').textContent = (cantidades.funda * precios.funda).toFixed(2) + '€';

    // Calcular el total general
    const totalGeneral = (cantidades.iphone * precios.iphone) +
                         (cantidades.cargador * precios.cargador) +
                         (cantidades.funda * precios.funda);
    
    document.getElementById('total-general').textContent = totalGeneral.toFixed(2) + '€';
}

// Añadir eventos a los botones de incrementar y decrementar
document.querySelectorAll('.btn-increase').forEach(button => {
    button.addEventListener('click', () => {
        const producto = button.getAttribute('data-producto');
        // Aumentar la cantidad del producto correspondiente
        cantidades[producto]++;
        // Actualizar la cantidad visualmente
        document.getElementById('cantidad-' + producto).value = cantidades[producto];
        // Actualizar los totales
        actualizarTotales();
    });
});

document.querySelectorAll('.btn-decrease').forEach(button => {
    button.addEventListener('click', () => {
        const producto = button.getAttribute('data-producto');
        // Disminuir la cantidad solo si es mayor a 0
        if (cantidades[producto] > 0) {
            cantidades[producto]--;
            // Actualizar la cantidad visualmente
            document.getElementById('cantidad-' + producto).value = cantidades[producto];
            // Actualizar los totales
            actualizarTotales();
        }
    });
});

// Inicializar los totales en 0
actualizarTotales();
