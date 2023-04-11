
import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css',
  
  ],
  styles: [` :host {
    display: block;
    background: #fff;
    border-radius: 4px;
    padding: 16px;
    width:50vw;

  }

  `]

})

export class ViewPostsComponent   {

  nameInCharge!: string;
  paternalSurname!: string;
  maternalSurname!: string;
  photo!:string;
  location!:string;
  date!:Date;

  titleEvent!:string;
  descriptionEvent!: string;

  onSubmit(): void {
    console.log('Formulario enviado');
    console.log('Nombre:', this.nameInCharge);
    console.log('Apellido Paterno:', this.paternalSurname);
    console.log('Apellido Materno', this.maternalSurname);

  }
  // constructor(
  //   private dialogRef: DialogRef,
  // ){}

  // close(){
  //   this.dialogRef.close();
  // }
  
}
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

Toast.fire({
  icon: 'success',
  title: 'Signed in successfully'
})

