import { Component, OnInit, VERSION } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceScriptService } from 'src/app/service-script.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})
export class ContentPageComponent implements OnInit {


  formData:any = {}
  constructor(private apiService: ServiceScriptService,private router: Router){}
  makeBooking(){
   
  this.apiService.makeBooking(this.formData);
  this. alertWithSuccess()
  
  this.router.navigate(['/payment']);
  
  }
 displayList(){
      console.log(this.formData.checkin)
      console.log(this.formData.checkout)
      console.log(this.formData.kids)
      console.log(this.formData.adults)
      console.log(this.formData.rooms)
 }
 alertWithSuccess(){
   Swal.fire("Booking Successfull!...","Make Payment","success")
 }
  ngOnInit() {
    return true
  }

}
