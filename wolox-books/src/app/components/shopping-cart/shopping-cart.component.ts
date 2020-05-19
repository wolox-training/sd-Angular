import { Component, OnInit } from '@angular/core';
import { CartCountService } from 'src/app/services/cart-count.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private cartCountService: CartCountService) { }

  addedBooks = [];

  ngOnInit(): void {
    this.cartCountService.currentAddedBooks.subscribe(
      currentAddedBooks => this.addedBooks = currentAddedBooks
    );
  }

}
