import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { AuthService } from '../services/auth.service';
export const authGuard: CanActivateFn = () => {
 const auth = inject(AuthService);
 const router = inject(Router);
 if (auth.currentUser()) {
 return true;
 }
 // STEP 2: After a reload the signal is empty, but the COOKIE is still
 // in the browser. Ask the server "who am I?" before deciding.
 return auth.checkSession().pipe(
 map(() => true),
 // STEP 3: 401 means no valid cookie. Send them to the login page.
 // A UrlTree is a redirect: "do not open this page, open that URL".
 catchError(() => of(router.createUrlTree(['/login']))),
 );
};
