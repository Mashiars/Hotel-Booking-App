import { Component, OnInit } from '@angular/core';
import { ServiceScriptService } from '../service-script.service';


@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {

  constructor(private apiService: ServiceScriptService) { }
   formData: any = {};


  ngOnInit(): void {
  }
    payment(): void {
    this.apiService.makePayment(this.formData)
    console.log(this.formData);
  }

   cancel():void{
          this.apiService.cancel();
  }
  
}

