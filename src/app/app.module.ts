import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavigationModule } from './navigation/navigation.module';
import { FormsModule } from '@angular/forms';
import {MatTooltipModule} from '@angular/material/tooltip';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { Uppgift1Component } from './uppgift1/uppgift1.component';
import { StoreComponent } from './uppgift1/store/store.component';
import { ItemComponent } from './uppgift1/item/item.component';
import { Uppgift2Component } from './uppgift2/uppgift2.component';
import { ShowHideComponent } from './uppgift2/show-hide/show-hide.component';
import { Uppgift3Component } from './uppgift3/uppgift3.component';
import { ReverseComponent } from './uppgift3/reverse/reverse.component';
import { Uppgift4Component } from './uppgift4/uppgift4.component';
import { Uppgift5Component } from './uppgift5/uppgift5.component';
import { TimerComponent } from './uppgift5/timer/timer.component';
import { Uppgift6Component } from './uppgift6/uppgift6.component';
import { ClickCatcherComponent } from './uppgift6/click-catcher/click-catcher.component';
import { Uppgift7Component } from './uppgift7/uppgift7.component';
import { Uppgift8Component } from './uppgift8/uppgift8.component';
import { Uppgift9Component } from './uppgift9/uppgift9.component';
import { FizzBuzzComponent } from './uppgift9/fizz-buzz/fizz-buzz.component';

const routes: Routes = [
  {path: "uppgift1", component: Uppgift1Component},
  {path: "uppgift2", component: Uppgift2Component},
  {path: "uppgift3", component: Uppgift3Component},
  {path: "uppgift4", component: Uppgift4Component},
  {path: "uppgift5", component: Uppgift5Component},
  {path: "uppgift6", component: Uppgift6Component},
  {path: "uppgift7", component: Uppgift7Component},
  {path: "uppgift8", component: Uppgift8Component},
  {path: "uppgift9", component: Uppgift9Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Uppgift1Component,
    StoreComponent,
    ItemComponent,
    Uppgift2Component,
    ShowHideComponent,
    Uppgift3Component,
    ReverseComponent,
    Uppgift4Component,
    Uppgift5Component,
    TimerComponent,
    Uppgift6Component,
    ClickCatcherComponent,
    Uppgift7Component,
    Uppgift8Component,
    Uppgift9Component,
    FizzBuzzComponent

  ],
  imports: [
    BrowserModule,
    NavigationModule,
    FormsModule,
    MatTooltipModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
