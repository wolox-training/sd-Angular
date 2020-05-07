import { Component, OnInit, OnChanges } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnChanges {
  constructor(private booksService: BooksService) { }

  searchBarPlaceHolderTxt: string = 'Search books by title...';
  filterName: string = 'filterBooks';

  filterBooks: any;
  currentPageContent: any[];

  ngOnInit(): void {
    this.booksService.fetchBooks(1).subscribe(
      res => {
        this.currentPageContent = res.page;
      },
      error => console.log('Error!', error.error.errors)
    );
  }

  ngOnChanges(){
    console.log(this.filterBooks);
  }
}
