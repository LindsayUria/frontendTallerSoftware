import { Component } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styles: [`
    :host {
      display: block;
      background: #fff;
      border-radius: 8px;
      padding: 16px;
    }
  `]
})
export class TodoDialogComponent {

  constructor(
    private dialogRef: DialogRef,
  ){}

  close(){
    this.dialogRef.close();
  }
}
