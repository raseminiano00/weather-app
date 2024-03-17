import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    NavbarModule,
    RouterModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-orlqi68r3xu83xgm.us.auth0.com',
      clientId: '2qAIct0y6fidls9IyhUSjRY802NFrDZD',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
