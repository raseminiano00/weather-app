import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable, map } from 'rxjs';

export const homeGuardFn: CanActivateFn = (): Observable<boolean> => {
  const oauthService: AuthService = inject(AuthService);

  return oauthService.isAuthenticated$.pipe(
    map((response) => {
      if (!response) {
        window.location.replace('landing');
        return false;
      }

      return true;
    })
  );
};
