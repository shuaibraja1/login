import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  count, filter, map, Observable, observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  countsubscriber !: Subscription;

  constructor(public rtr:Router) { }

  ngOnInit(): void {
    let observable = new Observable<number>(Subscriber=>{
      let count = 0;
      setInterval(() =>{
       Subscriber.next(count++);


      },1000);
    });
      this.countsubscriber=observable.pipe(map(count =>{
        return count +2;
      }),
      filter((count)=>{
        return count>10;
      })

      ).subscribe(count =>{
        console.log(count);

      

      }
    
  );}   
  ngOnDestroy(){
   this.countsubscriber.unsubscribe();

  }
  LogoutUser(){
    this.rtr.navigate(["Home"]); 
  }
}
    
