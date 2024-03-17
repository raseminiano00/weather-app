import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    canActivate: [],
    component: LandingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingPageRoutingModule {}
