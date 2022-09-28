import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import{CavtivateGuard} from './cavtivate.guard'


const routes: Routes = [
  
  {path:"",component:LoginComponent},
  {path:"Home",component:HomeComponent,canActivate:[CavtivateGuard]},
  {path:"Login",component:LoginComponent},
  {path:"Home",
  loadChildren:()=>import('./home/home.module')
  .then(mod=>mod.HomeModule)
}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
