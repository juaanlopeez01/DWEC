import { Component, inject } from '@angular/core';
import { Iserie } from '../../interfaces/iserie';
import { SeriesServicesService } from '../../services/series-services.service';
import { SerieCardComponent } from "../serie-card/serie-card.component";

@Component({
  selector: 'app-series-list',
  standalone: true,
  imports: [SerieCardComponent],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css'
})

export class SeriesListComponent {
  arrSeries!: Iserie[];
  seriesService = inject(SeriesServicesService);
  
  ngOnInit(){
    this.arrSeries = this.seriesService.getAllSeries();
  }
}
