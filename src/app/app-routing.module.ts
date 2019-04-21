import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { SearchComponent } from '../app/components/search/search.component';
import { AboutComponent} from '../app/components/about/about.component';
import { RegisterComponent} from '../app/components/register/register.component';
import { LoginComponent } from '../app/components/login/login.component';
import { HotelDetailComponent } from '../app/components/hotel-detail/hotel-detail.component';
import { BookingComponent } from '../app/components/booking/booking.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'hotel-details/:id', component: HotelDetailComponent},
  { path: 'booking', component: BookingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
