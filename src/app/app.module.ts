import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminUploadComponent } from './admin-upload/admin-upload.component';
import { ServiceScriptService } from './service-script.service';
import { HomePageComponent } from './home/home-page/home-page.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { UserBookingComponent } from './user-booking/user-booking.component';
import { OurGuestroomsComponent } from './gallaries/our-guestrooms/our-guestrooms.component';
import {APP_BASE_HREF} from '@angular/common';
import { FooterComponent } from './home/footer/footer.component';
import { ContentPageComponent } from './home/content-page/content-page.component';
import { ExperiencesComponent } from './gallaries/experiences/experiences.component';
import { RestaurantComponent } from './gallaries/restaurant/restaurant.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule ],
  declarations: [ AppComponent,FooterComponent, HelloComponent, AdminUploadComponent, HomePageComponent,AdminBookingComponent, CardPaymentComponent, UserBookingComponent, OurGuestroomsComponent, ContentPageComponent, ExperiencesComponent, RestaurantComponent, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServiceScriptService,  { provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
