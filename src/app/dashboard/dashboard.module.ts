import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    MainDashboardComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MainDashboardComponent
  ]
})
export class DashboardModule { }
