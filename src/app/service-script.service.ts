import { Injectable } from '@angular/core';

@Injectable()
export class ServiceScriptService {
  bookings=[];
  payment=[];
  constructor() { }

  makeBooking(obj){
    this.bookings.push(obj)
    console.log(this.bookings)
  }

makePayment(obj){
  this.payment.push(obj)
  console.log(this.payment)
}



}