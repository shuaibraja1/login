import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CavtivateGuard implements CanActivate {
  constructor(public rtr : Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem("uname")== null&& localStorage.getItem("pwd")==null){
        alert("please enter credentials and login..")
        this.rtr.navigate(["Login"]);
        return false;

      }

  
  else 
  {
    return true;

  }
  
}
}
