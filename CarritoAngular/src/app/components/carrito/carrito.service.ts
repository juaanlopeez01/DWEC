import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private currency: string;
  private products: any[];
  public total: number;

  constructor() {
    this.currency = ''; 
    this.products = [];  
    this.total = 0;
  }

  cargarCarrito(catalogo: any) {
    this.currency = catalogo.currency;
    this.products = catalogo.products.map((product: any) => ({
      ...product,
      quantity: 0,
      subtotal: 0
    }));
    this.total = 0;
  }

  actualizarUnidades(sku: string, unidades: number) {
    this.total = 0;
    for (let product of this.products) {
      if (product.SKU === sku) {
        product.quantity = unidades;
        let subtotal = product.quantity * product.price;
        product.subtotal = parseFloat(subtotal.toFixed(2));
      }
      this.total += product.subtotal;
    }
    this.total = parseFloat(this.total.toFixed(2));
  }

  obtenerUnidades(sku: string) {
    for (let product of this.products) {
      if (product.SKU === sku) {
        return product.quantity;
      }
    }
    return 0;
  }

  getProducts() {
    return this.products;
  }

  getCurrency() {
    return this.currency;
  }

  getTotal() {
    return this.total;
  }
}
