import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { HotelService } from '../../services/hotel.service';
import { Booking } from '../../classes/booking';
import { ConfirmBookingDialogComponent } from '../confirm-booking-dialog/confirm-booking-dialog.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  booking_details: Booking;
  room_types: Array<string>;
  userForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  contact: FormControl;
  comments: FormControl;
  dialogResult;

  constructor(private hotelService: HotelService, public dialog: MatDialog) {
    console.log('------------constructor----------');
    this.booking_details = this.hotelService.getBookingDetails();
    this.setRoomTypes();
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    console.log('\n\n--------------Booking in BookingComponent-----------');
    console.log(this.booking_details);
  }

  createFormControls() {
    this.firstname = new FormControl('', Validators.required);
    this.lastname = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*')
    ]);
    this.contact = new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{10}')
    ]);
    this.comments = new FormControl();
  }

  createForm() {
    this.userForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      contact: this.contact,
      comments: this.comments
    });
  }

  setRoomTypes() {
    this.room_types = Object.keys(this.booking_details.room_info);
  }

  onSubmit() {
    const dialogRef = this.dialog.open(ConfirmBookingDialogComponent, {
      width: '600px',
      data: 'Are you sure you want to confirm booking?'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }
}
