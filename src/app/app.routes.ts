import { RouterModule, Routes } from '@angular/router';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { NgModule } from '@angular/core';
import { HomePageModule } from './pages/home-page/home-page.module';
import { homeGuardFn } from './shared/guards/home.guard';
import { landingGuardFn } from './shared/guards/landing.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'landing' },
  {
    path: 'landing',
    canActivate: [landingGuardFn],
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => LandingPageModule
      ),
  },
  {
    path: 'home',
    canActivate: [homeGuardFn],
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then((m) => HomePageModule),
  },
  { path: '**', redirectTo: 'landing' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
