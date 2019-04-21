import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {HotelService} from '../../services/hotel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loadHome: Boolean;
  // @Output() clicked = new EventEmitter<string>();
  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.loadHome = true;
  }

  /*onClick(searchTerm: string) {
    this.clicked.emit(searchTerm);
  }*/

  setCity(searchcity: string) {
    this.hotelService.setCurrentCity(searchcity);
  }

}
