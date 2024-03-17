import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.less',
})
export class NavbarComponent {
  constructor(public auth: AuthService) {}

  onLogoutClick() {
    this.auth.logout({
      logoutParams: {
        returnTo: document.location.origin,
      },
    });
  }
}
