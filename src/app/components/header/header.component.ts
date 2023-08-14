import { Component, Input } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent {

  private _cart: Cart = { items: []};
  itemsQuantity = 0;

  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart;

    // instead of objects, only change quantity
    this.itemsQuantity = cart.items
      .map((item) => item.quantity)
      // then add items up
      .reduce((prev, current) => prev + current, 0);
  }

  constructor() { }

}
