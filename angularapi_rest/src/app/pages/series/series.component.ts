import { Component } from '@angular/core';
import { SeriesService } from '../../services/series.service';
import { ISeries } from '../../interfaces/iseries';
import { inject } from '@angular/core/testing';
import { SeriesCardComponent } from "../../components/series-card/series-card.component";

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [SeriesCardComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

  SeriesService=inject(SeriesService);
  arrSeries : ISeries[];

  constructor(){
    this.arrSeries = []
  }

  async ngOnInit() : Promise<void> {
    try{
      this.arrSeries = await this.SeriesService.getAllWithPromises();
    }catch(err){
      console.log('error al concetar con la api: ' +err)
    }
  }
}
