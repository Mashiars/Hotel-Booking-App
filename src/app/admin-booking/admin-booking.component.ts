import { Component, OnInit } from '@angular/core';
import { ServiceScriptService } from '../service-script.service';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})
export class AdminBookingComponent implements OnInit {
  bookings:any={};
 combined:any={}
  constructor(private apiService: ServiceScriptService) { 
    this.printBooking();
  }

printBooking()
{
 // this.bookings = this.apiService.getBookings();
this.combined=(this.apiService.getBookings())

}
  ngOnInit() {
  }

}