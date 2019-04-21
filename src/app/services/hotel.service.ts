import { Injectable } from '@angular/core';
import { HOTELS } from '../../assets/hotel_data/data';
import { Hotel } from '../classes/hotel';
import { Rating } from '../classes/rating';
import { Address } from '../classes/address';
import { Booking } from '../classes/booking';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/share';

@Injectable()
export class HotelService {
  currentCity: string;
  private subject = new Subject<Booking>();
  booking_details: Observable<Booking>;
  booking_det: Booking;
  // private observer: Observer<Booking>;

  constructor() {
    console.log('\n\n-----------in constructor of service---------');
    // make the observable sharable
   /* this.booking_details = new Observable<Booking>(observer =>
      this.observer = observer
    ).share();*/
  }

  getHotelData(): any {
    return HOTELS;
  }

  getHotelById(id: String): Hotel {
    const hotels = this.getHotelData();
    console.log('\n ----------- hotels ------------');
    console.log(hotels);
    for (let i = 0; i < hotels.length; i++) {
      if (hotels[i].id === id) {
        return hotels[i];
      }
    }
  }

  setCurrentCity(searchcity: string) {
    this.currentCity = searchcity.length !== 0 ? searchcity : '';
  }

  setBookingDetails(booking_details: Booking) {
    console.log('----in setBookingDetails------------');
    /*if (this.observer !== undefined) {
      console.log('----in if--------');
      console.log(booking_details);
      this.observer.next(booking_details);
    }*/
    // this.subject.next(booking_details);
    this.booking_det = booking_details;
  }

  getBookingDetails(): Booking {
    return this.booking_det;
}
}
