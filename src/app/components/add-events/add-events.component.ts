import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";
import { FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from'sweetalert2';
@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.css']
})
export class AddEventsComponent implements OnInit {
  selectedModality: string= "";
  selectedScope: string = "";

  category: Category[]=[];
  constructor(private categoryService:CategoryService){}

  public newEventForm = new FormGroup({
    titlePost: new FormControl('', Validators.required),
    subtitlePost: new FormControl('', Validators.required),
    descriptionPost: new FormControl('', Validators.required),
    //modality: new FormControl('', Validators.required),
    //scope: new FormControl('', Validators.required),
  });

  async addNewEvent(data: any){
    if(this.newEventForm.valid){
      this.successNotification()
    }else{
      this.wrongNotification("Llene todos los campos");
    }

  };
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

  wrongNotification(mensaje:string){
    Swal.fire({
      icon: 'error',
      title: 'No se pudo registrar el evento',
      text: mensaje,
    })
  }
  successNotification(){
    Swal.fire({
      title: 'REGISTRO EXITOSO',
      text: 'La operacion se ha realizado completamente',
      icon: 'success',
      showCancelButton: false,
      confirmButtonText: 'Ok',
    })
  }
}
