import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from "../../services/authorization.service";
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailVerificationMessage: boolean = false;

  constructor(private auth: AuthorizationService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;

    this.auth.signIn(email, password).subscribe((data) => {
      this.router.navigateByUrl('/');
    }, (err) => {
      this.emailVerificationMessage = true;
    });
  }
}
