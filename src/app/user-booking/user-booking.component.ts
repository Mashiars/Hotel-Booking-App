import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceScriptService } from '../service-script.service';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent implements OnInit {

   formData:any = {}
  constructor(private apiService: ServiceScriptService,private router: Router){}
  makeBooking(){
  this.apiService.makeBooking(this.formData);
  this.router.navigate(['/payment']);
  }
 displayList(){
      console.log(this.formData.checkin)
      console.log(this.formData.checkout)
      console.log(this.formData.kids)
      console.log(this.formData.adults)
      console.log(this.formData.rooms)
 }

  ngOnInit() {
  }

}