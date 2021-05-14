import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-educadores',
  templateUrl: './educadores.component.html',
  styleUrls: ['./educadores.component.scss']
})
export class EducadoresComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      },
      1200:{
        items:3
      }
    },
    nav: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
