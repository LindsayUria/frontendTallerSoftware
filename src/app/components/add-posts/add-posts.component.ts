import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";


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


  category: Category[]=[];
  constructor(private categoryService:CategoryService){}
  ngOnInit(): void {
    this.getCategory();
  }

  getCategory(){
    console.log('Categorys');

    this.categoryService.getCategory().subscribe(
      data => {
        this.category = data;
        console.log('data');
        console.log(this.category);
      },
      error => {
        console.log(error);
      });
  }

}
