import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  standalone: true,
  imports: [],
  templateUrl: './segundo-componente.component.html',
  styleUrl: './segundo-componente.component.css'
})
export class SegundoComponenteComponent {
  mitexto: string
  @imput() textoH: string="";
  constructor(){
    this.mitexto = ""
  }
}
