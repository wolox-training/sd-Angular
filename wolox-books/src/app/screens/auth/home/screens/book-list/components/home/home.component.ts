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

  searchBarPlaceHolderTxt: string = 'Search books by title...';
  filterName: string = 'filterBooks';
  filterBooks: any;
  currentPageContent: Book[];
  cartCount: number;

  ngOnInit(): void {
    this.cartCountService.currentCount.subscribe(
      currentCount => this.cartCount = currentCount
    );

    this.booksService.fetchBooks(1).subscribe(
      res => {
        this.currentPageContent = res.page;
      },
      error => console.log('Error!', error.error.errors)
    );
  }

  addToCart(){
    this.cartCountService.changeCount(this.cartCount += 1);
  }
}
