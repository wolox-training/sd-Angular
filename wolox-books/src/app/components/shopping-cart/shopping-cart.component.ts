import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { NgxSmartModalService } from 'ngx-smart-modal';
import * as BookActions from '../../store/book.actions';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})

export class ShoppingCartComponent implements OnInit {
  @ViewChild('cartModal') cartModal;
  private modalRef;

  constructor(private store: Store<AppState>, public ngxSmartModalService: NgxSmartModalService) { 
    this.cartBooks = store.select('cartBooks');
  }

  cartBooks: Observable<Book[]>;

  ngOnInit(): void {
  }

  deleteBook(index: number){
    this.store.dispatch(new BookActions.RemoveBook(index))
  }
}
