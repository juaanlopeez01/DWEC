import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, Observable } from 'rxjs';
import { ISeries } from '../interfaces/iseries';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  httpClient = inject(HttpClient);
  private baseUrl : string = "https://peticiones.online/api/series";
  constructor() { }


  getAllWithObservables(): Observable<ISeries []>{
    return this.httpClient.get<ISeries []>(this.baseUrl); 
  }

  getAllWithPromises(): Promise<ISeries[]> {
    return lastValueFrom(this.httpClient.get<ISeries[]>(this.baseUrl))
  }

  getById(id: string): Promise<ISeries[]>{
    this.httpClient.get<ISeries>(´$(this.baseUrl)/$(id)´);
  }
}
