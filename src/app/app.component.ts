import { Component, OnInit, VERSION } from '@angular/core';
import { ServiceScriptService } from './service-script.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  formData: any = {};


  ngOnInit(): void {
  }
    payment(): void {
    console.log(this.formData);
  }
}

