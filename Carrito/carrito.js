class Carrito {
    constructor(catalogo) {
        this.currency = catalogo.currency;
        this.products = catalogo.products;
        this.total = 0
        for (let product of this.products) {
            product.quantity = 0;
            let subtotal = product.quantity * product.price;
            this.total = this.total + subtotal
            product.subtotal = parseFloat(subtotal.toFixed(2));
        }
    }

    actualizarUnidades(sku, unidades) {
        this.total = 0
        for (let product of this.products) {
            if (product.SKU === sku) {
                product.quantity = unidades;
                let subtotal = product.quantity * product.price;
                product.subtotal = parseFloat(subtotal.toFixed(2));
            }
            this.total = this.total + product.subtotal;
        }
        this.total = this.total.toFixed(2)
    }

    obtenerUnidades(sku) {
        for (let product of this.products) {
            if (product.SKU === sku) {
                return product.quantity;
            }
        }
    }
}

// Vincular clase carrito con clase script
export default Carrito;
 