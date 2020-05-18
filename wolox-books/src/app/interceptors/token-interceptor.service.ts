import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request, next) {

    if (!this.shoudIntercept(request)) {
      return next.handle(request);
    }

    let accessToken = localStorage.getItem('accessToken');
    let uid = localStorage.getItem('uid');
    let client = localStorage.getItem('client');

    let tokenizedRequest = request.clone({
      setHeaders: {
        'access-token': accessToken,
        'client': client, 
        'uid': uid
      }
    });

    return next.handle(tokenizedRequest);
  }

  private shoudIntercept(request): boolean{
    if (request.url.includes('api/v1/books')) {
      return true;
    } else {
      return false;
    }
  }
}
