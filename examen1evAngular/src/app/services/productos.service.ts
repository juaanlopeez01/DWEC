import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iropa } from '../interfaces/iropa';

@Injectable({
  providedIn: 'root'
})
export class RopaServicesService {
  
  private arrRopa: Iropa[] = [];

  constructor() {
    
    fetch("https://jsonblob.com/api/1313446273633935360")
    .then(response => response.json())
    .then(prendas => {
        prendas.forEach((element: any) => {
          let ropa = element as Iropa;
          this.arrRopa.push(element);
          
        });
          this.arrRopa = prendas;
    });
  }

  getAllPrenda(): Iropa[]{
    return this.arrRopa;
  }}