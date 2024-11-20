import { Component } from '@angular/core';
import { Ipost } from '../../interfaces/ipost';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})


export class BlogComponent {
    arrPosts: Ipost [] = [];
    
    newPosts: Ipost = {
        titulo: "",
        url: "" ,
        descripcion: "",
        fecha: ""
    };
  
  guardardatos():void{
      this.arrPosts.push(this.newPosts);
      this.newPosts = {
          titulo: "",
          url: "" ,
          descripcion: "",
          fecha: ""
      }
        console.log(this.arrPosts);
    }
  cargarDatos(): string {
    let html: string = "";
    this.arrPosts.forEach(element => {
      html +=
      `
      <p>${element.titulo}</p>
      <img src="${element.url}"></img>
      <p>${element.descripcion}</p>
      <p>${element.fecha}</p>
      `
    })

    return html;
  }


  constructor(){

  }

  

}
