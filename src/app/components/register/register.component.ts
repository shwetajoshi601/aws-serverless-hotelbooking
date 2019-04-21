import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthorizationService} from '../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  confirmCode: boolean = false;
  codeWasConfirmed: boolean = false;
  error: string = '';

  constructor(private auth: AuthorizationService,
    private router: Router) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log('--------Email : ', email);
    console.log('Password----------: ', password);
    this.auth.register(email, password).subscribe(
      (data) => {        
        this.confirmCode = true;
      },
      (err) => {
        console.log(err);
        this.error = "Registration Error has occurred";
      }
    );
  }

  validateAuthCode(form: NgForm) {
    const code = form.value.code;
    
    this.auth.confirmAuthCode(code).subscribe(
      (data) => {
        //this._router.navigateByUrl('/');
        this.codeWasConfirmed = true;
        this.confirmCode = false;
      },
      (err) => {
        console.log(err);
        this.error = "Confirm Authorization Error has occurred";
      });
  }
}
