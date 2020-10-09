import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

import { ServiceScriptService } from './service-script.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {


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
