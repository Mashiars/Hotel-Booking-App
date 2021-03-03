import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminUploadComponent } from './admin-upload/admin-upload.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminBookingComponent } from './admin-booking/admin-booking.component';
import { UserBookingComponent } from './user-booking/user-booking.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
import { OurGuestroomsComponent } from './gallaries/our-guestrooms/our-guestrooms.component';


import { RestaurantComponent } from './gallaries/restaurant/restaurant.component';
import { ExperiencesComponent } from './gallaries/experiences/experiences.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
   { path: '', redirectTo: 'home' ,pathMatch:'full'},
    { path: 'restaurant', component: RestaurantComponent },
    { path: 'experiences', component: ExperiencesComponent },
    { path: 'guestrooms', component: OurGuestroomsComponent },
    { path: 'adminupload', component: AdminUploadComponent },
    { path: 'adminbookings', component: AdminBookingComponent },
    { path: 'home', component: HomePageComponent },
        { path: 'login', component: LoginComponent },
    { path: 'booking', component: UserBookingComponent },
    { path: 'payment', component: CardPaymentComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }