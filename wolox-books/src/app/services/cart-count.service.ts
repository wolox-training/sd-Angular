import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class CartCountService {

  private addedBooksSource = new BehaviorSubject<Book[]>([]);
  currentAddedBooks: Observable<Book[]> = this.addedBooksSource.asObservable();

  constructor() { }

  changeBooksList(books: Book[]){
    event.stopPropagation();
    this.addedBooksSource.next(books);
  }
}
