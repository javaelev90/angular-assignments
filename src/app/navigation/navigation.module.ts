import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavigationComponent } from './navigation.component';
import { NavbuttonComponent } from './navbutton/navbutton.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavigationComponent,
    NavbuttonComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
    NavbuttonComponent,
    MatToolbarModule
  ]
})
export class NavigationModule { }
