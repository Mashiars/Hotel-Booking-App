import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceScriptService } from '../service-script.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-payment',
  templateUrl: './card-payment.component.html',
  styleUrls: ['./card-payment.component.css']
})
export class CardPaymentComponent implements OnInit {
  mobNumberPattern = "[0-9]{16}$"; 
  phonePattern = "^((\\+27-?)|0)?[0-9]{10}$";  
  VCCPattern = "[0-9]{3}$";  
  constructor(private apiService: ServiceScriptService,private router: Router) { }
  formData:any = {}


  ngOnInit() {
    console.log("good")
  }
    payment(){
    this.apiService.makePayment(this.formData)
    this. alertWithSuccess()
    console.log(this.formData);
      this.router.navigate(['']);
  }

   cancel(){
    this.router.navigate(['']);
  }
  alertWithSuccess(){
    Swal.fire("Payment Successfull!...")
  }
  
}

