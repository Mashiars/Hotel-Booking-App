import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminUploadComponent } from './admin-upload/admin-upload.component';
import { ServiceScriptService } from './service-script.service';
import { HomePageComponent } from './home-page/home-page.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, AdminUploadComponent, HomePageComponent, CardPaymentComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServiceScriptService]
})
export class AppModule { }

