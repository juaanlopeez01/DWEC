import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: './blog.component.css'
})
export class BlogComponent {
  // Array para las noticias iniciales
  arrAficiones: Iaficiones [] = [];

  newAficion: Iaficiones = {
    aficion: "",
    nombre: ""
  };

  guardarDatos():void{
    //Guardar los datos
    this.arrAficiones.push(this.newAficion);

    this.newAficion = {
      aficion: "",
      nombre: "",
    }
    console.log(this.arrAficiones);
  }

  cargarDatos(): string {
    let html : string = "";
    this.arrAficiones.forEach(element => {
      html += `<p>${element.aficion} - ${element.nombre}</p>`
    });
    return html;
  }
}