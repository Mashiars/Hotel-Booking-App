import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class ServiceScriptService {
  bookings={};
  payment={};
  combined=[]


 constructor() { }
  makeBooking(obj){
    this.bookings=(obj)
    console.log(this.bookings)
  }
  makePayment(obj){
  this.payment=(obj)
 // console.log(this.payment)
 }
  

  getBookings(){
  //Object.assign(this.payment,this.bookings)
  this.combined.push(Object.assign(this.payment,this.bookings));
    return this.combined;
  }
   cancel(){
   
  var i = this.combined.length-1;
  this.combined[i] 
  --i;
 
  
   return this.combined;
  }

}