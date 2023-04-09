import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

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
    width:350px;
  }

  `]


})

export class ViewPostsComponent {

  name!: string;
  email!: string;
  message!: string;

  onSubmit() {
    console.log('Formulario enviado');
    console.log('Nombre:', this.name);
    console.log('Email:', this.email);
    console.log('Mensaje:', this.message);
  }
  constructor(
    private dialogRef: DialogRef,
  ){}

  close(){
    this.dialogRef.close();
  }
}
