import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceScriptService } from '../service-script.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ServiceScriptService,private router: Router) { 

  }
   formData: any = {};
   incorrectDetails=""
 combined=[]
  ngOnInit(): void {
  }
    login(): void {
    this.loginUser(this.formData.username,this.formData.password)
  
  
      
  }


  loginUser(username,password){

     const adminUser = "admin";
     const adminPass = "12345";
      if(adminUser==username && adminPass==password){
          this.router.navigate(['/adminupload']);
      }else{
            this.incorrectDetails = "User doesnt Exist!";
      }
  }





   cancel():void{
          this.apiService.cancel();
  }

}