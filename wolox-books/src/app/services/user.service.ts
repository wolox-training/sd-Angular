import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor(private httpClient: HttpClient) {}

  readonly SIGN_UP_URL = 'https://books-training-rails.herokuapp.com/api/v1/users';

  createUser(newUser: User){
    return this.httpClient.post<any>(this.SIGN_UP_URL, newUser.toJson());
  }
}
