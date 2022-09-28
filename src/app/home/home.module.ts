import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';

import { ListComponent } from './list/list.component';

import { ObservableComponent } from './observable/observable.component';




@NgModule({
  declarations: [
  
    ListComponent,
   
    ObservableComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
