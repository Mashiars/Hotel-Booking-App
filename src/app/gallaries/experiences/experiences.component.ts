import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceScriptService } from '../../service-script.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent implements OnInit {
  defaultExper=['https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQobpIEIO__38EbOtYAzQRxzttfvJ7r2QYkaw&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDFcxWRmOpsan7dsj4vhaDOfyqhrSn-BQRAA&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSKvoF_VadVRhMWfIrm4eqEL9qWA7KqeIYg8Q&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6lW9UPlLaRDAT32irDXLJp6YpH51C20cH9A&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBFTgYIGiWbGgxmC9icpGY2BXbw-xbHuCVgg&usqp=CAU','https://i.pinimg.com/originals/0f/43/f8/0f43f842d7102b75aafd754fb5bad361.jpg'];
  readDBarray:any=[]
    constructor(private apiService: ServiceScriptService,private router: Router){
      this.readDBarray.push(this.apiService.getImageCatagoriy())
      window.stop();
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