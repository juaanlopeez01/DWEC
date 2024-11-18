import { Component } from '@angular/core';
import { Inoticias } from '../interfaces/inoticias';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
  // Array para las noticias iniciales
  arrNoticias: Inoticias [] = [];

  newNoticias: Inoticias = {
    titulo: "",
    url: "" ,
    texto: "",
    fecha: ""
  };

  guardarDatos():void{
    //Guardar los datos
    this.arrNoticias.push(this.newNoticias);

    this.newNoticias = {
      titulo: "",
      url: "" ,
      texto: "",
      fecha: ""
    }
    console.log(this.arrNoticias);
  }

  cargarDatos(): string {
    let html : string = "";
    this.arrNoticias.forEach(element => {
      html += 
      `
      <p>${element.titulo}</p>
      <img src="${element.url}"></img>
      <p>${element.texto}</p>
      <p>${element.fecha}</p>
      `
    });

    return html;
  }
}