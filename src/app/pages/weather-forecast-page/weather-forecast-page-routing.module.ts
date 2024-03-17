import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WeatherForecastPageComponent } from './weather-forecast-page.component';

const routes = [
  {
    path: '',
    canActivate: [],
    component: WeatherForecastPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherForecastPageRoutingModule {}
