import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit{
  titulo: string = "";
  subtitulo: string = "";
  descripcion: string = "";
  cultura: string = "";
  


  constructor(){}
  ngOnInit(): void {
      
  }

}
