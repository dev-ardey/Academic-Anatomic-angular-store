import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',

})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [{
      product: 'https://via.placeholder.com/160',
      name: 'atlas',
      price: 495,
      quantity: 4,
      id: 56,
    },
    {
      product: 'https://via.placeholder.com/160',
      name: 'atlas',
      price: 495,
      quantity: 8,
      id: 56,
    }
  ]
  };
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items.
      map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

}
