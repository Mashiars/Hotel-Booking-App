import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AdminUploadComponent } from './admin-upload/admin-upload.component';
import { ServiceScriptService } from './service-script.service';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AdminUploadComponent, HomePageComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ServiceScriptService]
})
export class AppModule { }
