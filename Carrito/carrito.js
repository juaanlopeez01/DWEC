class Carrito {
    constructor(catalogo) {
        this.currency = catalogo.currency;
        this.products = catalogo.products;
        for (let product of this.products) {
            product.quantity = 0;
            let subtotal = product.quantity * product.price;
            product.subtotal = parseFloat(subtotal.toFixed(2));
        }
    }
    actualizarUnidades(sku, unidades) {
        for (let product of this.products) {
            if (product.SKU === sku) {
                product.quantity = unidades;
                let subtotal = product.quantity * product.price;
                product.subtotal = parseFloat(subtotal.toFixed(2));
            }
        }
    }

    obtenerUnidades(sku) {
        for (let product of this.products) {
            if (product.SKU === sku) {
                return product.quantity;
            }
        }
    }

    obtenerInformacionProducto(sku) {
        for (let product of this.products) {
            if (product.SKU === sku) {
                return product;
            }
        }
    }

    obtenerCarrito() {
        let total = 0;
        for (let product of this.products) {
            total += product.subtotal;
        }
        return {
            total: total.toFixed(2),
            currency: this.currency,
            products: this.products
        };
    }
}

 