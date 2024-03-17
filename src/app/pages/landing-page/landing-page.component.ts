import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.less',
})
export class LandingPageComponent {
  constructor(public auth: AuthService) {}

  onLoginClick() {
    this.auth.loginWithRedirect();
  }
}
