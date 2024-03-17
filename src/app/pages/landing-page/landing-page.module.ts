import { NgModule } from '@angular/core';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [LandingPageRoutingModule, CommonModule],
})
export class LandingPageModule {}
