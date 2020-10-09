import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminUploadComponent } from './admin-upload/admin-upload.component';
import { ServiceScriptService } from './service-script.service';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { UserBookingComponent } from './user-booking/user-booking.component';
import { OurGuestroomsComponent } from './gallaries/our-guestrooms/our-guestrooms.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent, AdminUploadComponent, HomePageComponent,AdminBookingComponent, CardPaymentComponent, UserBookingComponent, OurGuestroomsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServiceScriptService]
})
export class AppModule { }
