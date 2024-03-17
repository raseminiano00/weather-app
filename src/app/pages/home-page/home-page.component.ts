import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { WeatherForecastService } from '../../shared/services/weather-forecast.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.less',
})
export class HomePageComponent {
  name: string = '';
  githubAccountUrl: string = 'https://github.com';

  constructor(
    private authService: AuthService,
    private weatherForecastService: WeatherForecastService
  ) {
    this.authService.user$.subscribe((user) => {
      console.log(user);
      this.name = user?.name || '';
      this.githubAccountUrl += `/${user?.nickname}` || '';
    });
  }

  onSearchWeatherClick() {
    this.weatherForecastService
      .getWeatherForecastForToday()
      .subscribe((response) => {
      });
  }
}
