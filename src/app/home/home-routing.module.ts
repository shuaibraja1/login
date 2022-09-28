import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeloginComponent } from "./homelogin/homelogin.component";
import{ListComponent}from './list/list.component'
import { ObservableComponent } from './observable/observable.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'homelogin',component:HomeloginComponent},
  {path:'list',component:ListComponent},
  {path:'observable',component:ObservableComponent},
  {path:'signup',component:SignupComponent},
  
  {path:"Home",
  loadChildren:()=>import('./home.module')
  .then(mod=>mod.HomeModule)
}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
