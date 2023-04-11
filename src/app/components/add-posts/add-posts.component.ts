import { Component } from '@angular/core';


@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent {
  formData = {
    titulo: '',
    subtitulo: '',
    descripcion: ''
  };

}
