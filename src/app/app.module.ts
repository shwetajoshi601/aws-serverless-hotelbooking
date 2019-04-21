import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';
import { HotelService } from '../app/services/hotel.service';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { RatingPipe } from './classes/ratingpipe';
import { SearchfilterComponent } from './components/searchfilter/searchfilter.component';
import { PagerService } from '../app/services/pager.service';
import { BookingComponent } from './components/booking/booking.component';
import { ConfirmBookingDialogComponent } from './components/confirm-booking-dialog/confirm-booking-dialog.component';
import { AuthorizationService} from './services/authorization.service';
import { HeaderComponent } from '../app/components/header/header.component';
// specify the mapping of routes & components
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    HotelDetailComponent,
    AboutComponent,
    RatingPipe,
    SearchfilterComponent,
    BookingComponent,
    ConfirmBookingDialogComponent,
    HeaderComponent
  ],
  entryComponents: [ConfirmBookingDialogComponent],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), AppRoutingModule, FormsModule,
    MatDatepickerModule, MatNativeDateModule, MatInputModule, BrowserAnimationsModule, ReactiveFormsModule, MatDialogModule
  ],
  providers: [ HotelService, RatingPipe, PagerService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
