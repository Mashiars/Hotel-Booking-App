import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceScriptService } from '../service-script.service';


@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {

  constructor(private apiService: ServiceScriptService,private router: Router) { }
   formData: any = {};
   paymentDone="";
 combined:any=[]
  ngOnInit(): void {
  }
    payment(): void {
    this.apiService.makePayment(this.formData)
    this.formData="";

   this.paymentDone = "Payment Successful!"
    //  this.combined.push(this.apiService.getBookings())
  }




  
  home(){
   this.router.navigate(['']); 
  }


   cancel():void{
          this.apiService.cancel();
  }
  
}

