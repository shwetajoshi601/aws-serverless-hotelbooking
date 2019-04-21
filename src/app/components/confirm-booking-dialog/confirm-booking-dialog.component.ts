import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { Router } from '@angular/router';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-confirm-booking-dialog',
  templateUrl: './confirm-booking-dialog.component.html',
  styleUrls: ['./confirm-booking-dialog.component.css']
})
export class ConfirmBookingDialogComponent implements OnInit {

  constructor(public thisDialogRef: MatDialogRef<BookingComponent>, public router: Router) { }

  ngOnInit() {
  }

  onCloseOK() {
    this.thisDialogRef.close('Confirm');
    this.router.navigate(['/home']);
  }

  onCloseFeedback() {
    this.thisDialogRef.close('Cancel');
  }
}
