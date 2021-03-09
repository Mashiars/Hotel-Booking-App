import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceScriptService } from '../../service-script.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private apiService: ServiceScriptService,private router: Router){
    this.apiService.getCurrentUser()
  }

  ngOnInit(): void {
    console.log("good")
  }
   
  
  logOut(){
    this.apiService.logOut();
    this.router.navigate(['']);
  }

}