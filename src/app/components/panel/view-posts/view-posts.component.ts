
import { Component } from '@angular/core';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css',

  ],
  styles: [` :host {
    display: block;
    background: #fff;
    border-radius: 8px;
    padding: 16px;
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
