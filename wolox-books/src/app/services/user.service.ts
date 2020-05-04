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

  createUser(newUser: User){
    return this.httpClient.post<any>(this.SIGN_UP_URL, newUser.toJson());
  }
}
