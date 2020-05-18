import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pagination } from '../models/pagination';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpClient: HttpClient) { }

  readonly BOOKS_LIST_URL = environment.apiBaseUrl + '/books';

  fetchBooks(page: number){
    let params = new HttpParams().set('page', page.toString());

    return this.httpClient.get<Pagination<Book>>(
      this.BOOKS_LIST_URL,
      { params: params }
    );
  }
}
