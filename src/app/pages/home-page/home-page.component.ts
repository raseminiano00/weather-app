import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { WeatherForecastService } from '../../shared/services/weather-forecast.service';
import { CITY_NAMES } from './home-page.constant';
import { StorageMap } from '@ngx-pwa/local-storage';
import { map } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.less',
})
export class HomePageComponent {
  name: string = '';
  githubAccountUrl: string = 'https://github.com';
  inputCityText = '';

  errorState = {
    hasError: false,
    message: '',
  };

  constructor(
    private authService: AuthService,
    private weatherForecastService: WeatherForecastService,
    private storageMap: StorageMap
  ) {
    this.authService.user$.subscribe((user) => {
      this.name = user?.name || '';
      this.githubAccountUrl += `/${user?.nickname}` || '';
    });
  }

  onSearchWeatherClick() {
    if (!this.validateInput()) {
      return;
    }

    this.weatherForecastService
      .getWeatherForecastForToday(this.inputCityText)
      .subscribe({
        next: (response) => {
          if (response) {
            this.storageMap.set('cityResponse', response).subscribe(() => {
              window.location.replace('weather');
            });
          }
        },
        error: () => {
          this.errorState = {
            hasError: true,
            message:
              'Sorry, an error occurred while fetching data from the API. Please try again later.',
          };
        },
      });
  }

  validateInput() {
    this.errorState = {
      hasError: false,
      message: '',
    };

    if (!this.inputCityText) {
      this.errorState = {
        hasError: true,
        message: 'Please input city',
      };
      return false;
    }

    if (!CITY_NAMES.includes(this.inputCityText.toLowerCase())) {
      this.errorState = {
        hasError: true,
        message: 'Input is not within our scope please try other city instead',
      };
      return false;
    }
    return true;
  }
}
