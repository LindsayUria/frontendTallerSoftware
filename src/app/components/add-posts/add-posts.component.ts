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
  arte: string = "";
  deporte: string = "";
  educacion: string = "";
  cursos: string = "";
  formacion: string = "";
  otro: string = "";
  categoria1: string = "";
  categoria2: string = "";
  categoria3: string = "";
  alcance: string = "";
  rango1: string = "";
  rango2: string = "";
  rango3: string = "";
  estudiantes: string = "";
  docentes: string = "";
  tercera_edad: string = "";
  administrativo: string = "";


  
  constructor(){}
  ngOnInit(): void {
      
  }

}
