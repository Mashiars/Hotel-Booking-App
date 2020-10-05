import { Injectable } from '@angular/core';

@Injectable()
export class ServiceScriptService {
  bookings=[]
  constructor() { }
  makeBooking(obj){
    this.bookings.push(obj)
    console.log(this.bookings[0].checkin)
  }

}