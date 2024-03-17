import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IWeatherForecastResponse } from '../models/weather-forecast.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherForecastService {
  constructor(private httpClient: HttpClient) {}

  getWeatherForecastForToday(
    city: string
  ): Observable<IWeatherForecastResponse> {
    return this.httpClient.get<IWeatherForecastResponse>(
      'https://api.openweathermap.org/data/2.5/weather',
      {
        params: {
          q: city,
          appid: 'bc0f182187b8251356c1de8656ec9eb5',
        },
      }
    );
  }
}
