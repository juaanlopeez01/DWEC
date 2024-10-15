let carrito = null;

function cargarCarrito(catalogo) {
    carrito = new Carrito(catalogo);
    dibujarCarrito(carrito);
}

function actualizarCantidad(sku, cantidad){
    let unidades = 0;
    if (cantidad == null) {
        unidades = document.getElementById(`cantidad_${sku}`).value;
        console.log(unidades)
    } else {
        cantidad = parseInt(cantidad);
        unidades = carrito.obtenerUnidades(sku);
        unidades = unidades + cantidad;
    }
    if (unidades < 0) {
        return;
    } 
    carrito.actualizarUnidades(sku, unidades);
    dibujarCarrito(carrito);
}

function dibujarCarrito(carrito) {
    let carrito_string = "";
    let carrito_total = carrito.obtenerCarrito();
    for (let product of carrito_total.products) {
        carrito_string += `
            <tr>
                <td>
                    <div>${product.title}</div>
                    Ref: ${product.SKU}
                </td>
                <td>
                    <button type="button" class="btn btn-light" onclick="actualizarCantidad('${product.SKU}', -1)">-</button>
                    <input type="number" value="${product.quantity}" id="cantidad_${product.SKU}" class="form-control" onchange="actualizarCantidad('${product.SKU}', null)">
                    <button type="button" class="btn btn-light" onclick="actualizarCantidad('${product.SKU}', +1)">+</button>
                </td>
                <td>s
                    ${product.price}${carrito_total.currency}
                </td>
                <td>
                    ${product.subtotal}${carrito_total.currency}
                </td>
            </tr>
        `;
        
        
    }
    document.getElementById("carrito").innerHTML = carrito_string;
    
    let carrito_totalString = "";
    for (let product of carrito_total.products) {
        if (product.quantity == 0) {
            continue;
        }
        carrito_totalString += `
            <tr>
                <td>
                    ${product.title}
                </td>
                <td>
                    ${product.subtotal}${carrito_total.currency}
                </td>
            </tr>
        `;
    }
    document.getElementById("tablaTotal").innerHTML = carrito_totalString;
    document.getElementById("precioTotal").innerHTML = carrito_total.total + carrito_total.currency;
}

fetch("https://jsonblob.com/api/jsonBlob/1294298279851188224")
   .then(response => response.json())
   .then(catalogo => {
    cargarCarrito(catalogo);
    });





