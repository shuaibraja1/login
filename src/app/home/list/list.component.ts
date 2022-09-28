import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(public rtr:Router) { }

  ngOnInit(): void {
  }
  LogoutUser(){

    
    this.rtr.navigate(["Home"]); 
  }

}
