import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  userInfo = {};

  isAuth = new BehaviorSubject<boolean>(false);
  token = '';

  login(userName: string, password: string): Observable<boolean> {
    if (userName == 'testuser' && password == 'testuser') {
      this.isAuth.next(true);
      return of(true);
    }

    return throwError(() => ({ msg: 'Error' }));
  }
}
