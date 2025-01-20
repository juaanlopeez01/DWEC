import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Iropa } from '../interfaces/iropa';

@Component({
  selector: 'app-product-filter',
  standalone: true,
  imports: [],
  templateUrl: './product-filter.component.html',
  styleUrl: './product-filter.component.css'
})
export class ProductFilterComponent {
  @Input() miRopa!: Iropa;

}
