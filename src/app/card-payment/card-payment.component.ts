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


  ngOnInit(): void {
  }
    payment(): void {
    this.apiService.makePayment(this.formData)
    console.log(this.formData);
      this.router.navigate(['']);
  }

   cancel():void{
          this.apiService.cancel();
  }
  
}

