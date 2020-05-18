import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpClient: HttpClient) {}

  readonly SIGN_UP_URL = environment.apiBaseUrl + '/users';
  readonly LOGIN_URL = environment.apiBaseUrl + '/users/sign_in';

  createUser(newUser: User){
    return this.httpClient.post<any>(this.SIGN_UP_URL, newUser.toJson());
  }

  authenticateUser(email: string, password: string){
    return this.httpClient.post<any>(this.LOGIN_URL, this.loginData(email, password), { observe: 'response' });
  }

  loggedIn(){
    return !!localStorage.getItem('accessToken');
  }

  private loginData(email: string, password: string){
    return {
      'email': email,
      'password': password
    };
  }
}
