import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotel } from '../../classes/hotel';
import { Rating } from '../../classes/rating';
import { HotelService } from '../../services/hotel.service';
import { PagerService } from '../../services/pager.service';
import { RatingPipe } from '../../classes/ratingpipe';
import * as _ from 'underscore';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  selectedCity: String;
  sortByFilter: string;
  hotels: Hotel[];
  selectedHotel: Hotel;
  filteredHotels: Hotel[];
  filteredHotelsbyCity: Hotel[];
  filteredHotelsbyName: Hotel[];
  filteredByType: Hotel[];
  // should not refer to the same filteredHotels array. Hence create a new one.
  originalFiltered: Hotel[] = new Array<Hotel>();
  currentFilter: string;
  // pager object
  pager: any = {};
  // paged items
  pagedItems: any[];
  currRating: Number;
  minPrice: Number = 1000;
  maxPrice: Number = 30000;
  sortOption = 'Low-High';

  constructor(private hotelService: HotelService,
    private pagerService: PagerService,
    private ratingPipe: RatingPipe,
    private router: Router) { }

  ngOnInit() {
    this.getHotels();
    this.selectedCity = this.hotelService.currentCity;
    if (this.selectedCity !== undefined && this.selectedCity.length !== 0) {
      this.filteredHotelsbyCity = this.hotels.filter(hotel => hotel.address.city.toLowerCase() === this.selectedCity.toLowerCase());
    } else {
      this.filteredHotelsbyCity = this.hotels;
    }
    this.filteredHotels = this.filteredHotelsbyCity;

    console.log('\n------------In Search----------: ' + this.selectedCity);
    console.log('-----------ngOnInit filteredHotels-----------');
    console.log(this.filteredHotels.length);
    this.originalFiltered = this.filteredHotels;

    // initialize to page 1
    this.setPage(1);
  }

  getHotels(): void {
    this.hotels = this.hotelService.getHotelData();
  }

  setPage(page: number) {
    console.log(' In setPage() : ' + page);
    console.log(this.pager.totalPages);
    if (page < 1 || page > this.pager.totalPages) {
      console.log('----------in if-----------');
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.filteredHotels.length, page);
    console.log('\n----------pager----------');
    console.log(this.pager);
    // get current page of items
    this.pagedItems = this.filteredHotels.slice(this.pager.startIndex, this.pager.endIndex + 1);
    console.log('\n-----------pagedItems------------');
    console.log(this.pagedItems);
  }

  getMinimumPrice(room_types: any): number {
    const roomNames = Object.keys(room_types);
    let min = 999999;
    roomNames.forEach(function (room) {
      if (room_types[room][1] < min) {
        min = room_types[room][1];
      }
    });
    return min;
  }

  loadHotelDetails(hotel: Hotel): void {
    this.selectedHotel = hotel;
    this.router.navigate(['/hotel-details', hotel.id]);
  }

  onClicked(hotelName: string) {
    console.log('Search---------received clicked event-------:' + hotelName);
    if (hotelName !== undefined && hotelName.length !== 0) {
      if (this.selectedCity !== undefined && this.selectedCity.length !== 0) {
        this.filteredHotelsbyName = this.filteredHotelsbyCity.filter(hotel => hotel.name.toLowerCase().includes(hotelName.toLowerCase()));
      } else {
        this.filteredHotelsbyName = this.hotels.filter(hotel => hotel.name.toLowerCase().includes(hotelName.toLowerCase()));
      }
      this.filteredHotels = this.filteredHotelsbyName;
      this.originalFiltered = this.filteredHotels;
      this.setPage(1);
    } else {
      this.filteredHotels = this.selectedCity !== undefined && this.selectedCity.length !== 0 ? this.filteredHotelsbyCity : this.hotels;
      this.originalFiltered = this.filteredHotels;
      this.setPage(1);
    }
  }

  onSortByChanged(sortByFilter: string) {
    console.log('\n\n-------------onSortByChanged event received---------: ' + sortByFilter);
    this.sortByFilter = sortByFilter;

    if (sortByFilter !== 'None') {
      this.onSortOptionChanged(this.sortOption);
    } else {
      console.log('\n\n----------in else--------');
      this.filteredHotels.sort(
        (h1, h2) => Number(h1.id) - Number(h2.id)
      );
      this.setPage(1);
    }
  }

  onSortOptionChanged(sortOption: string) {
    console.log('\n\n-------------onSortOptionChanged event received---------: ' + sortOption);
    this.sortOption = sortOption;
    switch (this.sortOption) {
      case 'Low-High':
        if (this.sortByFilter === 'Rating') {
          this.filteredHotels.sort(
            (h1, h2) => Number(this.ratingPipe.transform(h1.rating)) - Number(this.ratingPipe.transform(h2.rating))
          );
        } else if (this.sortByFilter === 'Price') {
          this.filteredHotels.sort(
            (h1, h2) => this.getMinimumPrice(h1.room_types) - this.getMinimumPrice(h2.room_types)
          );
        }
        break;
      case 'High-Low':
        if (this.sortByFilter === 'Rating') {
          this.filteredHotels.sort(
            (h1, h2) => Number(this.ratingPipe.transform(h2.rating)) - Number(this.ratingPipe.transform(h1.rating))
          );
        } else if (this.sortByFilter === 'Price') {
          this.filteredHotels.sort(
            (h1, h2) => this.getMinimumPrice(h2.room_types) - this.getMinimumPrice(h1.room_types)
          );
        }
        break;
    }
    this.originalFiltered = this.filteredHotels;
    this.setPage(1);
  }

  onFilterChanged(filter: string) {
    console.log('\n\n-----------filter changed event received----------: ' + filter);
    this.currentFilter = filter;
    this.filteredHotels = this.originalFiltered;
    this.setPage(1);
  }

  onHotelTypeChanged(hotelType: string) {
    console.log('\n\n-----------hotelType changed event received----------: ' + hotelType);
    switch (hotelType) {
      case '5-star':
      case '4-star':
      case '3-star':
      case 'Normal':
        // use originalFiltered to retain the original list of Hotels
        this.filteredByType = this.originalFiltered.filter(hotel => hotel.type.includes(hotelType));
        break;
      case 'All':
        this.filteredByType = this.originalFiltered;
    }
    this.filteredHotels = this.filteredByType;
    this.setPage(1);
  }

  onMinPriceChanged(minPrice: string) {
    this.minPrice = Number(minPrice);
    console.log('\n Received minPrice event : ' + minPrice);
    this.filterByPrice(this.minPrice, this.maxPrice);
  }

  onMaxPriceChanged(maxPrice: string) {
    this.maxPrice = Number(maxPrice);
    console.log('\n Received maxPrice event :' + maxPrice);
    this.filterByPrice(this.minPrice, this.maxPrice);
  }

  filterByPrice(minPrice: Number, maxPrice: Number) {
    console.log('min: ' + minPrice);
    console.log('max: ' + maxPrice);
    if (minPrice !== 0 && maxPrice !== 0) {
      console.log('--------originalFiltered------------');
      console.log(this.originalFiltered);
      this.filteredHotels = this.originalFiltered.filter(hotel => {
        const hotelMinPrice = this.getMinimumPrice(hotel.room_types);
        console.log('-------------hotelMinimumPrice------------');
        console.log(hotelMinPrice);
        return hotelMinPrice >= minPrice && hotelMinPrice <= maxPrice;
      }
      );
    } else {
      this.filteredHotels = this.originalFiltered;
    }
    console.log('\n\n---------filteredHotels----------');
    console.log(this.filteredHotels);
    this.pager = this.pagerService.getPager(this.filteredHotels.length, 1);
    this.setPage(1);
  }

  calculateAvgRating(rating: Rating) {
    console.log('\n\n----------in calculateRatingPercent------------');
    console.log(rating);
    const avg = Number(this.ratingPipe.transform(rating));
    console.log(avg);
    return avg;
  }
}
