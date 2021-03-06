import { Component, OnInit, OnChanges } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private booksService: BooksService) { }

  searchBarPlaceHolderTxt = 'Search books by title...';
  searchInput: string;
  currentPageContent: Book[];

  ngOnInit(): void {
    this.booksService.fetchBooks(1).subscribe(
      res => {
        this.currentPageContent = res.page;
      },
      error => console.log('Error!', error.error.errors)
    );
  }
}
