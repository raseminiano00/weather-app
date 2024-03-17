import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';

const routes = [
  {
    path: '',
    canActivate: [],
    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
