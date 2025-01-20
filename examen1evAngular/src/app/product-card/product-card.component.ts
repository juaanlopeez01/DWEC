import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iropa } from '../interfaces/iropa';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() miRopa!: Iropa;

}
