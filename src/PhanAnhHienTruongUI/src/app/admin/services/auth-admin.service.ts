import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthAdminService implements CanActivate {
  isAuth$ = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {}

  signIn(userName: string, password: string): Observable<boolean> {
    if (userName == 'admin' && password == 'password') {
      this.isAuth$.next(true);
      return of(true);
    }

    throwError({ msg: 'Không thành công' });
  }

  canActivate() {
    return this.isAuth$.pipe(
      tap((res) => {
        if (!res) {
          this.router.navigateByUrl('/admin/login');
        }
      })
    );
  }
}
