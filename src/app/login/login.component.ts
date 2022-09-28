import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import{LoginService}from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public srvc: LoginService,public rtr:Router) { }

  ngOnInit(): void {
  }
  loginfrm =new FormGroup({
    uname : new FormControl(),
    pwd : new FormControl()
  })
  checkUser(){
    alert();
    
    var res=this.srvc.ValidateUser(this.loginfrm.value["uname"] ,this.loginfrm.value["pwd"]);
    if(res){
      localStorage.setItem("uname ",this.loginfrm.value["uname"] );
      localStorage.setItem("pwd",this.loginfrm.value["pwd"] );
      this.rtr.navigate(["Home"]);
    }
    else
    {
      alert("invalid user...")
    }
  }

}
