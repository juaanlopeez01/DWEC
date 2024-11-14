import { Component } from '@angular/core';

interface Noticia {
  titulo: string;
  imagen: string;
  texto: string;
  fecha: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  noticias: Noticia[] = [
    {
      titulo: 'Primera Noticia',
      imagen: 'https://via.placeholder.com/150',
      texto: 'Este es el cuerpo de la primera noticia.',
      fecha: '2024-01-01'
    },
    {
      titulo: 'Segunda Noticia',
      imagen: 'https://via.placeholder.com/150',
      texto: 'Este es el cuerpo de la segunda noticia.',
      fecha: '2024-02-01'
    }
  ];

  nuevaNoticia: Noticia = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: ''
  };

  agregarNoticia() {
    if (this.nuevaNoticia.titulo && this.nuevaNoticia.imagen && this.nuevaNoticia.texto && this.nuevaNoticia.fecha) {
      this.noticias.push({ ...this.nuevaNoticia });
      this.nuevaNoticia = { titulo: '', imagen: '', texto: '', fecha: '' };
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
