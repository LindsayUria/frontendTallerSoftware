import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  sliderConfig = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    arrows: true
  };
}
