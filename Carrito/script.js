import Carrito from "./carrito.js";
let carrito = null;

function cargarCarrito(catalogo) {
    carrito = new Carrito(catalogo);
    dibujarCarrito(carrito);
}

// Actualizar cantidad del carrito
function actualizarCantidad(carrito, product, inputNumber, extraAmount, tdTotal, tdSubtotal, totalPrice, trCarrito){
    let quantity = product.quantity;
    let units = 0;
    if (extraAmount == null) {
        units = Number(inputNumber.value);
    } else {
        units = quantity + extraAmount;
    }
    if (units < 0) {
        units = 0;
    }
    carrito.actualizarUnidades(product.SKU, units);
    inputNumber.value = units;
    tdTotal.innerText = product.subtotal + carrito.currency
    tdSubtotal.innerText = product.subtotal + carrito.currency
    totalPrice.innerText = carrito.total + carrito.currency;
    
    if (product.quantity == 0){
        trCarrito.style.display = "none";
    } else {
        trCarrito.style.display = "initial";
    }
}

function dibujarCarrito(carrito) {
    for (let product of carrito.products) {
        // Creacion de elemento
        const mainCarrito = document.getElementById("carrito")
        const tr = document.createElement('tr')
        const tdProduct = document.createElement('td')
        const divProductName = document.createElement('div')
        const divProductRef = document.createElement('div')
        const tdQuantity = document.createElement('td')
        const btnMinus = document.createElement('button')
        const inputNumber = document.createElement('input')
        const btnPlus = document.createElement('button')
        const tdUnit = document.createElement('td')
        const tdTotal = document.createElement('td')
        const totalTable = document.getElementById('tablaTotal')
        const totalPrice = document.getElementById('precioTotal');
        const trCarrito = document.createElement('tr');
        const tdTitle = document.createElement('td')
        const tdSubtotal = document.createElement('td')
        
        // TD producto
        divProductName.innerText = product.title
        divProductRef.innerText = "Ref: " + product.SKU
        tdProduct.appendChild(divProductName)
        tdProduct.appendChild(divProductRef)
        tr.appendChild(tdProduct)

        // TD quantity/cantidad
        // botones
        btnMinus.innerText = '-'
        btnPlus.innerText = '+'
        inputNumber.value = product.quantity
        btnMinus.addEventListener('click', actualizarCantidad.bind(null, carrito, product, inputNumber, -1, tdTotal, tdSubtotal, totalPrice, trCarrito))
        btnPlus.addEventListener('click', actualizarCantidad.bind(null, carrito, product, inputNumber, +1, tdTotal, tdSubtotal, totalPrice, trCarrito))
        inputNumber.addEventListener('change', actualizarCantidad.bind(null, carrito, product, inputNumber, null, tdTotal, tdSubtotal, totalPrice, trCarrito))

        btnMinus.classList.add("btn");
        btnMinus.classList.add("btn-light");

        btnPlus.classList.add("btn");
        btnPlus.classList.add("btn-light");

        inputNumber.classList.add("form-control");

        tdQuantity.appendChild(btnMinus)
        tdQuantity.appendChild(inputNumber)
        tdQuantity.appendChild(btnPlus)
        tr.appendChild(tdQuantity)

        // TD unidades
        tdUnit.innerText = product.price + carrito.currency
        tr.appendChild(tdUnit)

        // TD total
        tdTotal.innerText = product.subtotal + carrito.currency
        tr.appendChild(tdTotal)

        // Añadir carrito tr
        mainCarrito.appendChild(tr)
        

        // Tabla Total
        tdTitle.innerText = product.title;
        tdSubtotal.innerText = product.subtotal + carrito.currency
        totalPrice.innerText = carrito.total + carrito.currency;
        if (product.quantity == 0){
            trCarrito.style.display = "none";
        } else {
            trCarrito.style.display = "initial";
        }
        trCarrito.appendChild(tdTitle);
        trCarrito.appendChild(tdSubtotal);
        totalTable.appendChild(trCarrito);

    }
}

// Fetch de catalogo de la API

fetch("https://jsonblob.com/api/jsonBlob/1294298279851188224")
   .then(response => response.json())
   .then(catalogo => {
    cargarCarrito(catalogo);
    });





