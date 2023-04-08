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
    border-radius: 8px;
    padding: 16px;
  }

  `]


})

export class ViewPostsComponent {
  constructor(
    private dialogRef: DialogRef,
  ){}

  close(){
    this.dialogRef.close();
  }
}
