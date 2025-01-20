import { Injectable } from '@angular/core';
import { ISerie } from '../interfaces/iserie.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesServicesService {
  
  private arrSeries: ISerie[] = [];

  constructor() {
    
    fetch("https://jsonblob.com/api/1313446273633935360")
    .then(response => response.json())
    .then(series => {
        series.forEach((element: any) => {
          let serie = element as ISerie;
          this.arrSeries.push(element);
          
        });
          this.arrSeries = series;
    });
  }

  getAllSeries(): ISerie[]{
    return this.arrSeries;
  }

  
}
