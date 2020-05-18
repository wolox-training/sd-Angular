import { Component, OnInit, OnChanges } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/models/book';
import { CartCountService } from 'src/app/services/cart-count.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private booksService: BooksService, private cartCountService: CartCountService) { }

  searchBarPlaceHolderTxt = 'Search books by title...';
  searchInput: string;
  currentPageContent: Book[];
  cartBooks: Book[];

  ngOnInit(): void {
    this.cartCountService.currentAddedBooks.subscribe(
      currentAddedBooks => this.cartBooks = currentAddedBooks
    );

    this.booksService.fetchBooks(1).subscribe(
      res => {
        this.currentPageContent = res.page;
      },
      error => console.log('Error!', error.error.errors)
    );
  }

  addToCart(book: Book){
    this.cartBooks.push(book);
    this.cartCountService.changeBooksList(this.cartBooks);
  }
}
