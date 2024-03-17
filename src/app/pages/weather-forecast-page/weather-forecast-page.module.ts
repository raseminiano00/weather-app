import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherForecastPageComponent } from './weather-forecast-page.component';
import { WeatherForecastPageRoutingModule } from './weather-forecast-page-routing.module';

@NgModule({
  declarations: [WeatherForecastPageComponent],
  imports: [WeatherForecastPageRoutingModule, CommonModule],
})
export class WeatherForecastPageModule {}
