import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeraAppAngularComponent } from './component/primera-app-angular/primera-app-angular.component';
import { SegundoComponenteComponent } from "./components/segundo-componente/segundo-componente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeraAppAngularComponent, SegundoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PrimeraAppAngular';
}
