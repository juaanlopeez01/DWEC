import { Component } from '@angular/core';

@Component({
  selector: 'app-primera-app-angular',
  standalone: true,
  imports: [],
  templateUrl: './primera-app-angular.component.html',
  styleUrl: './primera-app-angular.component.css'
})
export class PrimeraAppAngularComponent {

  nombre: string
  apellidos: string
  edad: string
  email: string
  alumnos: string[]

  constructor(){
    this.nombre = "Pepe"
    this.apellidos = "Grande"
    this.edad = "33" 
    this.email = this.nombre+this.apellidos+"@gmail.com";
    this.alumnos = ["Pepe", "Paco"]

  }

  public nombreCompleto(){
    return this.nombre+" "+this.apellidos
  }

}
