import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomePageComponent],
  imports: [HomePageRoutingModule, CommonModule, FormsModule],
})
export class HomePageModule {}
