import { Component } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { CITY_COOKIE_RESPONSE } from '../home-page/home-page.constant';
import { IWeatherForecastResponse } from '../../shared/models/weather-forecast.model';

@Component({
  selector: 'app-weather-forecast-page',
  templateUrl: './weather-forecast-page.component.html',
  styleUrl: './weather-forecast-page.component.less',
})
export class WeatherForecastPageComponent {
  weatherForecast: IWeatherForecastResponse | null = null;

  weatherForecastTableData = {
    date: '',
    temp: 0,
    description: '',
    main: '',
    pressure: 0,
    humidity: 0,
  };

  constructor(private storageMap: StorageMap) {
    this.storageMap.get(CITY_COOKIE_RESPONSE).subscribe((response) => {
      if (!response) {
        window.location.replace('home');
      }

      const currentDate = new Date();
      const formattedDate = `${
        currentDate.getMonth() + 1
      }/${currentDate.getDate()}/${currentDate.getFullYear()}`;
      this.weatherForecast = response as IWeatherForecastResponse;
      this.weatherForecastTableData = {
        date: formattedDate,
        description: this.weatherForecast.weather[0].description,
        humidity: this.weatherForecast.main.humidity,
        main: this.weatherForecast.weather[0].main,
        pressure: this.weatherForecast.main.pressure,
        temp: this.weatherForecast.main.temp,
      };
    });
  }
}
