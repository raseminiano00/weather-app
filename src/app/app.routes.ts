import { RouterModule, Routes } from '@angular/router';
import { LandingPageModule } from './pages/landing-page/landing-page.module';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    canActivate: [],
    loadChildren: () =>
      import('./pages/landing-page/landing-page.module').then(
        (m) => LandingPageModule
      ),
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
