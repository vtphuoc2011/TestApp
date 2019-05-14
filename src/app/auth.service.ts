import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }
}
