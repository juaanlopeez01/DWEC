import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  // Array para las noticias iniciales
  news = [
    {
      title: 'Primera noticia',
      imageUrl: 'https://via.placeholder.com/150',
      body: 'Este es el cuerpo de la primera noticia.',
      date: '2024-11-15'
    },
    {
      title: 'Segunda noticia',
      imageUrl: 'https://via.placeholder.com/150',
      body: 'Este es el cuerpo de la segunda noticia.',
      date: '2024-11-16'
    }
  ];

  // Propiedades del formulario
  newTitle: string = '';
  newImageUrl: string = '';
  newBody: string = '';
  newDate: string = '';

  // Método para agregar una nueva noticia
  addNews() {
    if (!this.newTitle || !this.newImageUrl || !this.newBody || !this.newDate) {
      alert('Todos los campos son obligatorios');
      return;
    }

    const newPost = {
      title: this.newTitle,
      imageUrl: this.newImageUrl,
      body: this.newBody,
      date: this.newDate
    };

    this.news.push(newPost);

    // Limpiar los campos del formulario
    this.newTitle = '';
    this.newImageUrl = '';
    this.newBody = '';
    this.newDate = '';
  }

  // Métodos para capturar los datos del formulario de manera manual (sin ngModel)
  onTitleChange(event: any) {
    this.newTitle = event.target.value;
  }

  onImageUrlChange(event: any) {
    this.newImageUrl = event.target.value;
  }

  onBodyChange(event: any) {
    this.newBody = event.target.value;
  }

  onDateChange(event: any) {
    this.newDate = event.target.value;
  }
}
