import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    NgbModule,
    NgbPaginationModule, 
    NgbAlertModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
