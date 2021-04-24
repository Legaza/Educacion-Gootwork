import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { CarruselTalleresComponent } from './04-carrusel-talleres/carrusel-talleres.component';
import { CursosComponent } from './01-cursos/cursos.component';
import { EducadoresComponent } from './02-educadores/educadores.component';
import { NivelesEducativosComponent } from './03-niveles-educativos/niveles-educativos.component';
import { ContactosComponent } from './05-contactos/contactos.component';



@NgModule({
  declarations: [
    CarruselTalleresComponent,
    CursosComponent,
    EducadoresComponent,
    NivelesEducativosComponent,
    ContactosComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    CarouselModule
  ],
  exports:[
    CursosComponent,
    EducadoresComponent,
    NivelesEducativosComponent,
    CarruselTalleresComponent,
    ContactosComponent

  ]
})
export class MainPageModule { }
