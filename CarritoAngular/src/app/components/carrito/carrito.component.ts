import { Component, OnInit } from '@angular/core';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  products: any[] = [];
  total: number;
  currency: string;

  constructor(private carritoService: CarritoService) {
    this.total = 0;
    this.currency = '';
  }

  ngOnInit(): void {
    this.fetchCatalogo();
  }

  fetchCatalogo() {
    fetch("https://jsonblob.com/api/jsonBlob/1294298279851188224")
      .then(response => response.json())
      .then(catalogo => {
        this.carritoService.cargarCarrito(catalogo);
        this.products = this.carritoService.getProducts();
        this.total = this.carritoService.getTotal();
        this.currency = this.carritoService.getCurrency();
      });
  }

  actualizarCantidad(product: any, unidades: number) {
    this.carritoService.actualizarUnidades(product.SKU, unidades);
    this.total = this.carritoService.getTotal();
  }
}
