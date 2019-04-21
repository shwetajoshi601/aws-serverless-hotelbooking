import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { } from '@types/googlemaps';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from '../../classes/hotel';
import { Booking } from '../../classes/booking';
import { HotelService } from '../../services/hotel.service';
// import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;

  selectedHotelID: String;
  hotelDetails: Hotel;
  sub: any;
  room_types: Array<string>;
  checkInDate: Date;
  checkOutDate: Date;
  adults: number;
  children: number;
  noofrooms: Array<number>;
  room_prices: Array<number>;
  booking_details: Booking = new Booking();

  constructor(private route: ActivatedRoute, private router: Router, private hotelService: HotelService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.selectedHotelID = params['id']; // (+) converts string 'id' to a number
      this.hotelDetails = this.hotelService.getHotelById(this.selectedHotelID);

      const mapProp = {
        center: new google.maps.LatLng(this.hotelDetails.latitude, this.hotelDetails.longitude),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
    });

    this.setRoomTypes();
  }

  setRoomTypes() {
    this.room_types = Object.keys(this.hotelDetails.room_types);
    console.log('\n\n----------room types-----------');
    console.log(this.room_types);
    this.noofrooms = new Array(this.room_types.length);
    // initialize all the elements to 0
    this.noofrooms.fill(0);
    // to maintain the price for each room
    this.room_prices = new Array(this.room_types.length);
    this.room_prices.fill(0);
    console.log('-----------noofrooms array----------');
    console.log(this.noofrooms);
  }

  incrementRoomNo(index) {
    console.log('\n\n----------in ++ : ' + index);
    this.noofrooms[index] = this.noofrooms[index] + 1;
    this.calculateRoomPrice(index);
  }

  decrementRoomNo(index) {
    this.noofrooms[index] = this.noofrooms[index] === 0 ? this.noofrooms[index] : this.noofrooms[index] - 1;
    this.calculateRoomPrice(index);
  }

  calculateRoomPrice(index) {
    this.room_prices[index] = this.hotelDetails.room_types[this.room_types[index]][1] * this.noofrooms[index];
  }

  calculateTotalBill() {
    const diff = Math.abs(this.checkOutDate.getTime() - this.checkInDate.getTime());
    const no_of_days = Math.ceil(diff / (1000 * 3600 * 24));
    console.log('-----no of days------- : ' + no_of_days);
    let total_room = 0;
    // add the total prices for rooms
    for (let i = 0; i < this.room_prices.length; i++) {
      total_room = total_room + this.room_prices[i];
    }
    // multiply by no.of days to get cost for all days
    total_room = total_room * no_of_days;
    this.booking_details.total_price_for_room = total_room;

    // calculate tax - considering 10%
    const tax = total_room * 0.1;
    this.booking_details.tax = tax;

    // total bill with tax
    this.booking_details.total_with_tax = total_room + tax;
  }

  loadBookingDetail() {
    this.calculateTotalBill();
    // add other details like hotel name, etc
    this.booking_details.hotel_name = this.hotelDetails.name;
    this.booking_details.hotel_address = this.hotelDetails.address;
    this.booking_details.hotel_id = this.hotelDetails.id;
    this.booking_details.check_in = this.checkInDate;
    this.booking_details.check_out = this.checkOutDate;
    this.booking_details.no_adults = this.adults;
    this.booking_details.no_children = this.children;
    // add room details
    this.booking_details.room_info = {};
    for (let i = 0; i < this.room_prices.length; i++) {
      if (this.room_prices[i] !== 0) {
        this.booking_details.room_info[this.room_types[i]] = {
          no: this.noofrooms[i],
          price_per_night: this.hotelDetails.room_types[this.room_types[i]][1],
          total: this.room_prices[i]
        };
      }
    }
    console.log('\n\n------------booking----------');
    console.log(this.booking_details);
    this.hotelService.setBookingDetails(this.booking_details);
    this.router.navigate(['/booking']);
  }
}
