import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  estado:string = '';
  estadoBarra: boolean = false;



  constructor() { }
  Transformacion(): void{
    this.estadoBarra = !this.estadoBarra;
  }
  ngOnInit(): void {
  }

}
