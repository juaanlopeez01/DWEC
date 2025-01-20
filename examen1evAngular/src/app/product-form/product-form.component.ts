import { Component, inject } from '@angular/core';
import { Iropa } from '../interfaces/iropa';
import { RopaServicesService } from '../services/productos.service';
import { ProductCardComponent } from "../product-card/product-card.component";

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {

  arrRopa!: Iropa[];
  RopaServicesService = inject(RopaServicesService);

  
  ngOnInit(){
    this.arrRopa = this.RopaServicesService.getAllPrenda();
  }
}