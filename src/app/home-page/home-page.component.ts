import { Component, OnInit } from '@angular/core';
import { ServiceScriptService } from '../service-script.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    formData:any = {}
       paymentDone="";



  constructor(private apiService: ServiceScriptService,private router: Router){
               window.stop();
  }
  makeBooking(){


  this.apiService.makeBooking(this.formData);
  this.formData="";
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
      window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = "\o/";
        console.log("cond");
        e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
        return confirmationMessage;              // Gecko, WebKit, Chrome <34
    });
  }
  

}