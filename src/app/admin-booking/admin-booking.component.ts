import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceScriptService } from '../service-script.service';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.component.html',
  styleUrls: ['./admin-booking.component.css']
})
export class AdminBookingComponent implements OnInit {
  bookings:any={};
 combined:any=[]
 idEdit="";
 valueEdit="";


  constructor(private apiService: ServiceScriptService,private router: Router) { 
       this.
  printAll()

  }

  printAll(){
   this.combined=(this.apiService.getBookings())

  }

  removeItem(removeID){
    for(let k = 0;k<=this.combined.length-1;k++){
      if(this.combined[removeID]==this.combined[k]){
         let temp = this.combined[k];
         this.combined[temp] = this.combined[k+1];
         this.combined[k] = this.combined[temp];
         -- this.combined.length
      }
    }
  }

  editItem(id,value){
    this.idEdit = id;
    this.valueEdit = value;
      for(let x = 0;x<=this.combined.length-1;x++){
        if(this.combined[this.idEdit]==this.combined[x])
         {
           this.combined[x]=this.valueEdit
         }
        console.log( this.combined[x])  }
    
  }

 logout(){
     this.router.navigate(['']);
}


  ngOnInit() {
  }

}