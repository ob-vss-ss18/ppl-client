import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxElectronModule } from 'ngx-electron';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DemoComponent } from './demo/demo.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { CustomerComponent } from './customer/customer.component';
import { RentalComponent } from './rental/rental.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DemoComponent,
    EquipmentComponent,
    CustomerComponent,
    RentalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxElectronModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
