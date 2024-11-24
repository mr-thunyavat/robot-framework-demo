import { Injectable } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

  isLoggedin: boolean = false;
  username: string = "";

  login(username: string): Observable<boolean> {
    return of(true).pipe(tap((x) => {
      this.isLoggedin = x;
      this.username = "junko";
    }))
  }

  logout() {
    this.isLoggedin = false;
  }

}
