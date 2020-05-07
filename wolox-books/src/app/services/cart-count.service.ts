import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartCountService {

  private countSource = new BehaviorSubject<number>(0);
  currentCount: Observable<number> = this.countSource.asObservable();

  constructor() { }

  changeCount(count: number){
    event.stopPropagation();
    this.countSource.next(count);
  }
}
