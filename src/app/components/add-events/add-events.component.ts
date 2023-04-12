import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";


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
