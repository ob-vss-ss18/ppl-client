import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { DemoComponent } from './demo/demo.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { CustomerComponent } from './customer/customer.component';
import { RentalComponent } from './rental/rental.component';


const routes: Routes = [
    {
        path: '',
       // component: DemoComponent
        component: EquipmentComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'login-customer',
        component: LoginCustomerComponent
    },
    {
        path: 'equipment',
        component: EquipmentComponent
    },
    {
        path: 'customer',
        component: CustomerComponent
    },
    {
        path: 'rental',
        component: RentalComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
