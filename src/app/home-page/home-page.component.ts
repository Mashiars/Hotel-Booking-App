import { Component, OnInit } from '@angular/core';
import { ServiceScriptService } from '../service-script.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    formData:any = {}
  constructor(private apiService: ServiceScriptService){}
  makeBooking(){
    this.apiService.makeBooking(this.formData)
   // console.log(this.formData)
   // this.displayList();
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