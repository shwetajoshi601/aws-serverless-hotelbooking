import { Component, OnInit } from '@angular/core';
import { AuthorizationService} from '../../services/authorization.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthorizationService, private router: Router) { }

  ngOnInit() {
  }

  logoutUser() {
    this.auth.logOut();
    this.router.navigateByUrl('/home');
  }

  isLoggedIn() {
    return this.auth.isLoggedIn();
  }

}
