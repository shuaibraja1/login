import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormBuilder}from '@angular/forms';
import{FormGroup}from '@angular/forms'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupform !:FormGroup;
  constructor(private rtr:Router,private formbuilder:FormBuilder,private http:HttpClient) { }

  ngOnInit(): void {
    this.signupform = this.formbuilder.group({
        fullname:[''],
        email:[''],
        password:[''],
        mobile:['']

    })
  }
  signup(){
    this.http.post<any>("http://localhost:3000/signupusers ",this.signupform.value)
    .subscribe(res=>{
      alert("signup successfull");
      this.signupform.reset();
      this.rtr.navigate(["/Home/Home/homelogin"]);
    },err=>{
      alert("something went wrong")
    }

    )
  }
}
