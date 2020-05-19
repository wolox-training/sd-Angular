import { Component, OnInit, OnChanges } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/models/book';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import * as BookActions from '../../../../../../../store/book.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private booksService: BooksService, private store: Store<AppState>) { }

  searchBarPlaceHolderTxt = 'Search books by title...';
  searchInput: string;
  currentPageContent: Book[];
  cartBooks: Book[];

  ngOnInit(): void {
    this.booksService.fetchBooks(1).subscribe(
      res => {
        this.currentPageContent = res.page;
      },
      error => console.log('Error!', error.error.errors)
    );
  }

  addToCart(book: Book){
    event.stopPropagation();
    this.store.dispatch(new BookActions.AddBook(book));
  }
}
