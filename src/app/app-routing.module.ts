import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { DriverComponent } from './driver/driver.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  {path: 'signup', component:  SigninComponent },
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: CustomerDashboardComponent},
  {path: 'driver', component: DriverComponent},
  {path: 'booking', component: BookingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
