import { Injectable } from '@angular/core';
import { Iserie } from '../interfaces/iserie';

@Injectable({
  providedIn: 'root'
})
export class SeriesServicesService {
  
  private arrSeries: Iserie[] = [];

  constructor() {
    fetch("https://peticiones.online/api/series")
    .then(response => response.json())
    .then(series => {
        series.forEach((element: any) => {
          let serie = element as Iserie;
          this.arrSeries.push(element);
          
        });
          this.arrSeries = series;
    });
  }

  getAllSeries(): Iserie[]{
    return this.arrSeries;
  }

  
}
