import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { BooksService } from 'src/app/services/books.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private booksService: BooksService) { }

  book: Book;

  ngOnInit(): void {
    let bookId = this.route.snapshot.paramMap.get('id');
    this.booksService.fetchBookById(bookId).subscribe(
      res => { this.book = res },
      error => { console.log(error) }
    );
  }
}
