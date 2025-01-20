import { Component, Input, Output } from '@angular/core';
import { Iserie } from '../../interfaces/iserie';

@Component({
  selector: 'app-serie-card',
  standalone: true,
  imports: [],
  templateUrl: './serie-card.component.html',
  styleUrl: './serie-card.component.css'
})
export class SerieCardComponent {
    @Input() miSerie!: Iserie;
    
}