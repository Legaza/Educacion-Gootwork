import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarruselTalleresComponent } from './04-carrusel-talleres/carrusel-talleres.component';



@NgModule({
  declarations: [
    CarruselTalleresComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CarruselTalleresComponent
  ]
})
export class MainPageModule { }
